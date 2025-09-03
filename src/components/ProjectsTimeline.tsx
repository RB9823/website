import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectsTile } from './tiles/ProjectsTile';
import { TimelineTile } from './tiles/TimelineTile';
import { Icon } from './Icon';

export function ProjectsTimeline() {
  const [tab, setTab] = useState<'projects' | 'timeline'>('projects');
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="w-full p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <motion.button
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand outline-none ${
            tab === 'projects' ? 'bg-brand/20 text-brand' : 'bg-white/5 text-text-muted hover:text-text-primary'
          }`}
          onClick={() => setTab('projects')}
          aria-pressed={tab === 'projects'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Featured Projects
        </motion.button>
        <motion.button
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand outline-none ${
            tab === 'timeline' ? 'bg-brand/20 text-brand' : 'bg-white/5 text-text-muted hover:text-text-primary'
          }`}
          onClick={() => setTab('timeline')}
          aria-pressed={tab === 'timeline'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Career Timeline
        </motion.button>
      </div>

      <div>
        {tab === 'projects' ? (
          <div>
            <ProjectsTile isExpanded={showAllProjects} />
            <div className="mt-4 pt-4 border-t border-white/10">
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand outline-none rounded"
                whileHover={{ x: 5 }}
              >
                {showAllProjects ? 'Show Featured Only' : 'See All Projects'}
                <Icon name={showAllProjects ? "arrowLeft" : "arrowRight"} size={14} />
              </motion.button>
            </div>
          </div>
        ) : (
          <TimelineTile isExpanded={false} />
        )}
      </div>
    </div>
  );
}
