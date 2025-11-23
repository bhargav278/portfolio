import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCode,
  IconHeart,
} from '@tabler/icons-react';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: IconBrandGithub, href: 'https://github.com/bhargav278', label: 'GitHub' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com/in/bhargav-vekariya', label: 'LinkedIn' },
    { icon: IconMail, href: 'mailto:bhargav4596vekariya@gmail.com', label: 'Email' },
    { icon: IconCode, href: 'https://leetcode.com/u/VekariyaBhargav', label: 'LeetCode' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`py-12 border-t ${theme === 'dark'
        ? 'bg-dark-bg-primary border-white/10'
        : 'bg-light-bg-primary border-gray-300'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4 font-display"
              whileHover={{ scale: 1.05 }}
            >
              Bhargav Vekariya
            </motion.h3>
            <p
              className={`text-sm ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}
            >
              Software Developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`text-sm transition-colors ${theme === 'dark'
                      ? 'text-dark-text-secondary hover:text-primary-500'
                      : 'text-light-text-secondary hover:text-primary-600'
                      }`}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
                }`}
            >
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-colors ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
                    }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className={theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`border-t mb-8 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'
            }`}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className={`text-sm ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
              }`}
          >
            © {currentYear} Bhargav Vekariya. All rights reserved.
          </p>

          <p
            className={`text-sm ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
              }`}
          >
            Designed & Developed by Bhargav Vekariya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
