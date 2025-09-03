import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile } from '../../data/profile';
import { Icon } from '../Icon';

interface HeroTileProps {
  isExpanded: boolean;
}

export function HeroTile({ isExpanded }: HeroTileProps) {
  const [copied, setCopied] = useState(false);
  const [showQuickContact, setShowQuickContact] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleQuickContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/myzdbgal', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setShowQuickContact(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      name: 'Quick Message',
      value: 'Send a message directly',
      icon: 'email' as const,
      action: () => setShowQuickContact(!showQuickContact),
      copyable: false
    },
    {
      name: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: 'email' as const,
      action: handleEmailClick,
      copyable: true
    },
    {
      name: 'LinkedIn',
      value: '@rohan',
      href: profile.links.linkedin,
      icon: 'briefcase' as const,
    },
    {
      name: 'GitHub',
      value: '@rohan',
      href: profile.links.github,
      icon: 'dev' as const,
    }
  ];

  return (
    <div className="flex flex-col justify-between min-h-[400px] p-4 md:p-6">
      <div className="flex-shrink-0">
        <motion.h1 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2"
          animate={{ 
            fontSize: isExpanded ? '3rem' : undefined 
          }}
          transition={{ duration: 0.3 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p 
          className="text-text-muted leading-relaxed"
          animate={{ 
            fontSize: isExpanded ? '1.125rem' : '1rem' 
          }}
          transition={{ duration: 0.3 }}
        >
          {profile.valueProp}
        </motion.p>
      </div>

      <div className="flex-1 py-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Let's Connect</h3>
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={method.action || (() => window.open(method.href, '_blank'))}
                className="touch-ripple w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 text-left"
              >
                <span className="text-brand">
                  <Icon name={method.icon} size={18} />
                </span>
                <div className="flex-1">
                  <div className="font-medium text-text-primary text-sm">
                    {method.name}
                  </div>
                  <div className="text-text-muted text-xs">
                    {method.name === 'Email' && copied ? 'Copied to clipboard!' : method.value}
                  </div>
                </div>
                <motion.span 
                  className="text-brand text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  {method.copyable ? <Icon name="clipboard" size={14} /> : <Icon name="arrowRight" size={14} />}
                </motion.span>
              </button>
            </motion.div>
          ))}
          
          {showQuickContact && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <form onSubmit={handleQuickContactSubmit} className="space-y-3">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-3 py-2 bg-surface border border-stroke rounded text-text-primary placeholder-text-muted text-sm focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 bg-surface border border-stroke rounded text-text-primary placeholder-text-muted text-sm focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={3}
                  required
                  className="w-full px-3 py-2 bg-surface border border-stroke rounded text-text-primary placeholder-text-muted text-sm focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                />
                
                <div className="flex items-center gap-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-sm py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  
                  <button
                    type="button"
                    onClick={() => setShowQuickContact(false)}
                    className="text-text-muted hover:text-text-primary text-sm"
                  >
                    Cancel
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-500 text-sm">
                    ✓ Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm">
                    ✗ Failed to send message. Please try email instead.
                  </div>
                )}
              </form>
            </motion.div>
          )}
          
          <div className="flex items-center gap-2 text-sm mt-4 pt-2 border-t border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-text-muted">Available for new opportunities</span>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 pt-4">
        <div className="flex flex-col gap-3">
          <motion.a 
            href={profile.links.resume}
            className="btn-primary text-sm px-6 py-3 inline-flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="arrowRight" size={16} />
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}