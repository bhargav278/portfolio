import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { skillsData } from '../data/skillsData';
import { IconCode, IconServer, IconTools, IconBriefcase, IconMapPin } from '@tabler/icons-react';

const BentoCard = ({ children, className = "", delay = 0 }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-2xl border transition-colors duration-300 ${theme === 'dark'
        ? 'bg-dark-bg-secondary border-dark-border hover:border-primary-500/30'
        : 'bg-light-bg-secondary border-light-border hover:border-primary-500/30'
        } ${className}`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-32 ${theme === 'dark' ? 'bg-dark-bg-primary' : 'bg-light-bg-primary'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}>
                About Me
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}>
                I'm Bhargav Vekariya, a software engineer passionate about building scalable solutions.
                I combine technical expertise with design thinking to create exceptional digital products.
              </p>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}>
                Currently at Digiqt Technolabs, I focus on software development, ensuring robust
                architecture and seamless user experiences.
              </p>
            </div>
          </BentoCard>

          <BentoCard delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-primary-400' : 'bg-black/5 text-primary-600'
                  }`}>
                  <IconMapPin size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
                    }`}>Location</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                    }`}>Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-primary-400' : 'bg-black/5 text-primary-600'
                  }`}>
                  <IconBriefcase size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
                    }`}>Status</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                    }`}>Open to Work</p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <IconCode className={theme === 'dark' ? 'text-primary-400' : 'text-primary-600'} size={20} />
              <h3 className={`font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}>Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Framer Motion', 'TypeScript'].map(tech => (
                <span key={tech} className={`px-3 py-1 rounded-md text-xs font-medium border ${theme === 'dark'
                  ? 'bg-white/5 border-white/5 text-dark-text-secondary'
                  : 'bg-black/5 border-black/5 text-light-text-secondary'
                  }`}>
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <IconServer className={theme === 'dark' ? 'text-primary-400' : 'text-primary-600'} size={20} />
              <h3 className={`font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}>Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'MongoDB', 'Java'].map(tech => (
                <span key={tech} className={`px-3 py-1 rounded-md text-xs font-medium border ${theme === 'dark'
                  ? 'bg-white/5 border-white/5 text-dark-text-secondary'
                  : 'bg-black/5 border-black/5 text-light-text-secondary'
                  }`}>
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-2" delay={0.4}>
            <div className="flex items-center gap-3 mb-4">
              <IconTools className={theme === 'dark' ? 'text-primary-400' : 'text-primary-600'} size={20} />
              <h3 className={`font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}>Tools & Workflow</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map(tool => (
                <div key={tool.name} className={`flex items-center gap-2 px-3 py-2 rounded-md border ${theme === 'dark'
                  ? 'bg-white/5 border-white/5 text-dark-text-secondary'
                  : 'bg-black/5 border-black/5 text-light-text-secondary'
                  }`}>
                  <span>{tool.icon}</span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
