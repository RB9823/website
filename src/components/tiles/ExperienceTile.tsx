import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../../data/experience';
import { Icon } from '../Icon';
import { MOTION } from '../../utils/motion';

interface ExperienceTileProps {
  isExpanded: boolean;
}

export function ExperienceTile({ isExpanded: _isExpanded }: ExperienceTileProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="flex flex-col min-h-[480px] p-4 md:p-6">
      {/* Header */}
      <div className="flex-shrink-0 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">Experience</h2>
        <p className="text-text-muted text-sm">Professional journey and key accomplishments</p>
      </div>

      {/* Cards grid */}
      <div className="flex-1 overflow-visible">
        <AnimatePresence mode="wait">
          {!showAll ? (
            // Compact view - show first 2 experiences
            <motion.div
              key="compact"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-4 py-2"
            >
              {experience.slice(0, 2).map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  custom={index}
                  initial={false}
                  animate="show"
                  variants={MOTION.listItem}
                  whileHover={MOTION.cardHover}
                  className="group relative flex flex-col gap-2 rounded-lg border border-transparent bg-white/0 p-3 md:p-4 transition-colors duration-200 hover:border-white/15 hover:bg-white/5 backdrop-brightness-[1.05]"
                >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-text-primary text-sm md:text-base leading-snug">{item.role}</h3>
                  <p className="text-brand text-xs md:text-sm font-medium">{item.company}</p>
                </div>
                <div className="text-xs text-text-muted whitespace-nowrap flex items-center gap-1 leading-none">
                  <Icon name="calendar" size={12} /> {item.start} – {item.end}
                </div>
              </div>

              {item.bullets?.length > 0 && (
                <ul className="text-sm text-text-muted space-y-1.5 leading-relaxed list-none m-0">
                  {item.bullets.slice(0, showAll ? item.bullets.length : 2).map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand mt-1 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.tech?.length > 0 && (
                <div className="mt-auto pt-1 flex flex-wrap gap-1.5">
                  {item.tech.slice(0, showAll ? item.tech.length : 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-brand/10 text-brand text-xs rounded transition-transform shadow-[0_1px_6px_rgba(118,208,255,0.25)] group-hover:-translate-y-px">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
              ))}
            </motion.div>
          ) : (
            // Expanded view - show all experiences
            <motion.div
              key="expanded"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-4 py-2"
            >
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  custom={index}
                  initial={false}
                  animate="show"
                  variants={MOTION.listItem}
                  whileHover={MOTION.cardHover}
                  className="group relative flex flex-col gap-2 rounded-lg border border-transparent bg-white/0 p-3 md:p-4 transition-colors duration-200 hover:border-white/15 hover:bg-white/5 backdrop-brightness-[1.05]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm md:text-base leading-snug">{item.role}</h3>
                      <p className="text-brand text-xs md:text-sm font-medium">{item.company}</p>
                    </div>
                    <div className="text-xs text-text-muted whitespace-nowrap flex items-center gap-1 leading-none">
                      <Icon name="calendar" size={12} /> {item.start} – {item.end}
                    </div>
                </div>

                  {item.bullets?.length > 0 && (
                    <ul className="text-sm text-text-muted space-y-1.5 leading-relaxed list-none m-0">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand mt-1 flex-shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tech?.length > 0 && (
                    <div className="mt-auto pt-1 flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-brand/10 text-brand text-xs rounded transition-transform shadow-[0_1px_6px_rgba(118,208,255,0.25)] group-hover:-translate-y-px">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {experience.length > 2 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand outline-none rounded"
              whileHover={{ y: 2, ...MOTION.mobileHover }}
              whileTap={MOTION.tap}
              aria-expanded={showAll}
            >
              {showAll ? 'Show Less' : 'See All Experiences'}
              <motion.span 
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
                className="inline-flex"
              >
                <Icon name={"arrowDown"} size={14} />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
