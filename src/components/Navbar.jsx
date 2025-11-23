import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const selectedGlassEffect =
    theme === "dark" ? "glass" : "glass-light shadow-lg";

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? selectedGlassEffect : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            onClick={() => {
              scrollToSection("#home");
            }}
            className="text-3xl font-bold gradient-text font-display"
            whileHover={{ scale: 1.05 }}
          >
            BV
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme === "dark"
                  ? "text-dark-text-secondary hover:text-dark-text-primary hover:bg-white/5"
                  : "text-light-text-secondary hover:text-light-text-primary hover:bg-black/5"
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-lg glass flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <IconX
                  size={24}
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                />
              ) : (
                <IconMenu2
                  size={24}
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${theme === "dark" ? "glass" : "glass-light"
              } border-t ${theme === "dark" ? "border-white/10" : "border-black/10"
              }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                  }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${theme === "dark"
                    ? "text-dark-text-secondary hover:text-dark-text-primary hover:bg-white/5"
                    : "text-light-text-secondary hover:text-light-text-primary hover:bg-black/5"
                    }`}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
