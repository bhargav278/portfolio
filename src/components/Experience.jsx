import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import { useTheme } from '../hooks/useTheme';

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-24 ${theme === 'dark' ? 'bg-dark-bg-primary' : 'bg-light-bg-primary'
        }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
          }`}>
          Experience
        </h2>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-8 border-l-2 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                }`}
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-primary-500' : 'bg-primary-600'
                }`} />

              <div className="mb-2">
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                  }`}>
                  {exp.role}
                </h3>
                <div className={`text-lg font-medium ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>
                  {exp.company}
                </div>
              </div>

              <div className={`text-sm font-medium mb-4 uppercase tracking-wider ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
                }`}>
                {exp.duration}
              </div>

              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className={`leading-relaxed ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                    }`}>
                    • {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-medium px-2 py-1 rounded ${theme === 'dark'
                        ? 'bg-dark-bg-secondary text-dark-text-tertiary'
                        : 'bg-light-bg-tertiary text-light-text-tertiary'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
