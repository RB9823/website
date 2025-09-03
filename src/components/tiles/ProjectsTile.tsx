import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { MOTION } from '../../utils/motion';

interface ProjectsTileProps {
  isExpanded: boolean;
}

export function ProjectsTile({ isExpanded }: ProjectsTileProps) {
  // const [selectedProject, setSelectedProject] = useState(projects[0]);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const displayProjects = isExpanded ? projects : featuredProjects;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
          {isExpanded ? 'All Projects' : 'Featured Projects'}
        </h2>
        <p className="text-text-muted text-sm">
          {isExpanded 
            ? `${projects.length} projects showcasing various technologies` 
            : 'Some of my best work'
          }
        </p>
      </div>

      {/* Project grid */}
      <div className="flex-1 overflow-hidden">
        {!isExpanded ? (
          // Compact view - show featured projects as cards
          <div className="space-y-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                animate="show"
                variants={MOTION.listItem}
                whileHover={MOTION.hoverLift}
                className="group p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-brightness-[1.05] transition-colors cursor-pointer"
                // onClick={() => setSelectedProject(project)}
              >
                <h3 className="font-medium text-text-primary text-sm mb-1">
                  {project.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 bg-brand/10 text-brand text-xs rounded transition-transform shadow-[0_1px_6px_rgba(118,208,255,0.25)] group-hover:-translate-y-px"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-text-muted text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Expanded view - show all projects in grid
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-1 gap-4 pb-4">
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  custom={index}
                  initial="hidden"
                  animate="show"
                  variants={MOTION.listItem}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-brightness-[1.05] transition-all duration-200 cursor-pointer group"
                  whileHover={MOTION.hoverLift}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-text-primary group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-brand/20 text-brand text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-muted text-sm leading-[1.75] mb-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-brand/10 text-brand text-xs rounded transition-transform shadow-[0_1px_6px_rgba(118,208,255,0.25)] group-hover:-translate-y-px"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 text-sm">
                    {project.href && (
                      <a 
                        href={project.href}
                        className="text-brand hover:text-brand/80 transition-colors focus-visible:ring-2 focus-visible:ring-brand outline-none rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* No click hint; static tiles */}
    </div>
  );
}
