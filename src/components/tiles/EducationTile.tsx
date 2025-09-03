import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { Icon } from '../Icon';

interface EducationTileProps {
  isExpanded: boolean;
}

export function EducationTile({ isExpanded: _isExpanded }: EducationTileProps) {
  return (
    <div className="flex flex-col min-h-[400px] p-4 md:p-6">
      {/* Header */}
      <div className="flex-shrink-0 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
          Education
        </h2>
        <p className="text-text-muted text-sm">
          Academic background and achievements
        </p>
      </div>

      {/* Education items */}
      <div className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              {/* School and degree */}
              <div>
                <h3 className="font-semibold text-text-primary text-sm md:text-base">
                  {item.school}
                </h3>
                <p className="text-brand text-sm font-medium">
                  {item.degree}
                </p>
                {/* No field property in Education type */}
              </div>

              {/* Duration and location */}
              <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Icon name="calendar" size={14} /> {item.start} - {item.end}
                </span>
              </div>

              {/* Details */}
              {item.details && item.details.length > 0 && (
                <div className="text-sm space-y-1">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="text-text-muted">
                      {detail}
                    </div>
                  ))}
                </div>
              )}

              {/* Expanded content */}
              {/* Removed collapsed hint; tiles are static */}

              {/* Separator */}
              {index < education.length - 1 && (
                <div className="border-b border-stroke/50 pb-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* No click hint; tiles are static now */}
    </div>
  );
}
