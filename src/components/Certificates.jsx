import { motion } from 'framer-motion';
import { certificatesData } from '../data/educationData';
import { useTheme } from '../hooks/useTheme';
import { IconTrophy, IconCertificate } from '@tabler/icons-react';

const Certificates = () => {
  const { theme } = useTheme();

  return (
    <section
      id="certificates"
      className={`py-20 ${theme === 'dark'
        ? 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg-primary'
        : 'bg-gradient-to-b from-light-bg-secondary to-light-bg-primary'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            Certificates & Achievements
          </h2>
          <p
            className={`text-lg ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}
          >
            Recognition and accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-2xl p-8 hover:scale-105 transition-transform ${theme === 'light' && 'border !border-primary-500/20'}`}
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-primary-500/20">
                  <span className="text-4xl">{cert.icon}</span>
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                      }`}
                  >
                    {cert.title}
                  </h3>

                  <p className="text-primary-500 font-semibold mb-2">{cert.issuer}</p>

                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-sm ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                        }`}
                    >
                      {cert.year}
                    </span>
                    <span className="text-dark-text-tertiary">•</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${theme === 'dark'
                      ? 'bg-primary-500/10 text-primary-400 border-primary-500/20'
                      : 'bg-primary-500/10 text-primary-600 border-primary-500/20'
                      }`}>
                      {cert.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
