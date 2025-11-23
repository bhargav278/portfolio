import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { useTheme } from '../hooks/useTheme';
import { IconExternalLink, IconBrandGithub, IconArrowRight } from '@tabler/icons-react';

const ProjectCard = ({ project, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-dark-bg-secondary' : 'bg-light-bg-tertiary'
            }`}>
            <span className="text-gray-400">No Image</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
              title="View Live"
            >
              <IconExternalLink size={20} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
              title="View Code"
            >
              <IconBrandGithub size={20} />
            </a>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
            }`}>
            {project.title}
          </h3>
          <a
            href={project.liveLink || project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'text-dark-text-tertiary' : 'text-light-text-tertiary'
              }`}
          >
            <IconArrowRight size={20} />
          </a>
        </div>

        <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
          }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`text-xs font-medium px-2 py-1 rounded ${theme === 'dark'
                ? 'bg-dark-bg-secondary text-dark-text-secondary'
                : 'bg-light-bg-tertiary text-light-text-secondary'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`py-24 ${theme === 'dark' ? 'bg-dark-bg-primary' : 'bg-light-bg-primary'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
              }`}>
              Selected Works
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
              A collection of projects I've built.
            </p>
          </div>
          <a
            href="https://github.com/bhargav278"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            View GitHub <IconArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
