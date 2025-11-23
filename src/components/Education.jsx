import { motion } from 'framer-motion';
import { educationData, certificatesData } from '../data/educationData';
import { useTheme } from '../hooks/useTheme';
import { IconSchool, IconAward } from '@tabler/icons-react';

const Education = () => {
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`py-24 ${theme === 'dark' ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
              }`}>
              Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-primary-400' : 'bg-black/5 text-primary-600'
                      }`}>
                      <IconSchool size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                        }`}>
                        {edu.institution}
                      </h3>
                      <div className={`font-medium ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                        }`}>
                        {edu.degree}
                      </div>
                      <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
                        }`}>
                        {edu.duration} • {edu.grade}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
              }`}>
              Certificates
            </h2>
            <div className="space-y-8">
              {certificatesData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-primary-400' : 'bg-black/5 text-primary-600'
                      }`}>
                      <IconAward size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                        }`}>
                        {cert.title}
                      </h3>
                      <div className={`font-medium ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                        }`}>
                        {cert.issuer}
                      </div>
                      <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
                        }`}>
                        {cert.year} • {cert.achievement}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
