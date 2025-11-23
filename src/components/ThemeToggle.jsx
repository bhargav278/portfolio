import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14  rounded-full glass flex items-center justify-center group hover:scale-110 transition-transform border !border-primary-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <IconMoon size={24} className="text-primary-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <IconSun size={24} className="text-primary-500" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
