import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowRight } from '@tabler/icons-react';

const Hero = () => {
  const { theme } = useTheme();

  const socilaMedia = [
    { icon: IconBrandGithub, href: 'https://github.com/bhargav278' },
    { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/bhargav-vekariya-520681241/' },
    { icon: IconMail, href: 'mailto:bhargav4596vekariya@gmail.com' },
  ]

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden ${theme === 'dark' ? 'bg-dark-bg-primary' : 'bg-light-bg-primary'
        }`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[400px] opacity-20 pointer-events-none">
        <div className={`w-full h-full bg-gradient-to-b ${theme === 'dark' ? 'from-primary-500/30 to-transparent' : 'from-primary-500/20 to-transparent'
          } blur-[100px] rounded-full`} />
      </div>

      <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.05]'} pointer-events-none`}
        style={{ backgroundImage: `linear-gradient(${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 border ${theme === 'dark'
              ? 'bg-white/5 border-white/10 text-primary-400'
              : 'bg-black/5 border-black/10 text-primary-600'
              }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for new projects
            </div>

            <h1
              className={`text-6xl md:text-8xl font-bold tracking-tight mb-8 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Digital Future.
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}
            >
              I'm Bhargav, a Software Developer. I craft high-performance applications with focus on design, scalability, and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                View Projects
                <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className={`px-8 py-4 rounded-full font-medium border transition-all hover:scale-105 active:scale-95 ${theme === 'dark'
                  ? 'border-dark-border text-dark-text-primary hover:bg-white/5'
                  : 'border-light-border text-light-text-primary hover:bg-black/5'
                  }`}
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex justify-center gap-8">
              {socilaMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`transition-colors hover:-translate-y-1`}
                >
                  <social.icon stroke={1.5} className={`${theme === 'dark'
                    ? 'text-dark-text-tertiary hover:text-primary-400'
                    : 'text-light-text-tertiary hover:text-primary-600'
                    }`} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
