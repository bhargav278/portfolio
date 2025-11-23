import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';
import { sendEmail } from '../utils/emailService';
import { useTheme } from '../hooks/useTheme';
import { IconSend, IconCheck, IconX, IconMail, IconPhone, IconBrandLinkedin } from '@tabler/icons-react';

const Contact = () => {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name too short').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().min(10, 'Message too short').required('Required'),
  });

  const form = useForm({
    initialValues: { name: '', email: '', message: '' },
    validate: yupResolver(validationSchema)
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(values);
      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 ${theme === 'dark' ? 'bg-dark-bg-secondary' : 'bg-light-bg-secondary'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'
              }`}>
              Let's work <br /> together.
            </h2>
            <p className={`text-lg mb-12 max-w-md ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
              Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:bhargav4596vekariya@gmail.com" className="flex items-center gap-4 group">
                <div className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'
                  }`}>
                  <IconMail size={24} className={theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'} />
                </div>
                <span className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
                  bhargav4596vekariya@gmail.com
                </span>
              </a>

              <a href="tel:+919104723949" className="flex items-center gap-4 group">
                <div className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'
                  }`}>
                  <IconPhone size={24} className={theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'} />
                </div>
                <span className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
                  +91 91047 23949
                </span>
              </a>

              <a href="https://www.linkedin.com/in/bhargav-vekariya-520681241/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'
                  }`}>
                  <IconBrandLinkedin size={24} className={theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary'} />
                </div>
                <span className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
                  bhargav-vekariya
                </span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>Name</label>
                <input
                  type="text"
                  {...form.getInputProps('name')}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 focus:outline-none transition-colors ${theme === 'dark'
                    ? 'border-white/10 focus:border-primary-500 text-dark-text-primary placeholder-white/20'
                    : 'border-gray-200 focus:border-primary-500 text-light-text-primary placeholder-gray-400'
                    }`}
                  placeholder="John Doe"
                />
                {form.errors.name && <p className="mt-1 text-sm text-red-500">{form.errors.name}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>Email</label>
                <input
                  type="text"
                  {...form.getInputProps('email')}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 focus:outline-none transition-colors ${theme === 'dark'
                    ? 'border-white/10 focus:border-primary-500 text-dark-text-primary placeholder-white/20'
                    : 'border-gray-200 focus:border-primary-500 text-light-text-primary placeholder-gray-400'
                    }`}
                  placeholder="john@example.com"
                />
                {form.errors.email && <p className="mt-1 text-sm text-red-500">{form.errors.email}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>Message</label>
                <textarea
                  rows={3}
                  {...form.getInputProps('message')}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 focus:outline-none resize-none transition-colors ${theme === 'dark'
                    ? 'border-white/10 focus:border-primary-500 text-dark-text-primary placeholder-white/20'
                    : 'border-gray-200 focus:border-primary-500 text-light-text-primary placeholder-gray-400'
                    }`}
                  placeholder="Tell me about your self..."
                />
                {form.errors.message && <p className="mt-1 text-sm text-red-500">{form.errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <IconSend size={18} /></>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="text-green-500 flex items-center gap-2">
                  <IconCheck size={18} /> Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 flex items-center gap-2">
                  <IconX size={18} /> Failed to send. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
