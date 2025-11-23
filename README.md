# Portfolio Website

A modern, professional portfolio website built with React.js, Tailwind CSS, Three.js, and Framer Motion.

## Features

- 🎨 **Modern Design**: Beautiful gradient-based UI with glassmorphism effects
- 🌓 **Dark/Light Mode**: Smooth theme toggle with localStorage persistence
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 🎮 **3D Graphics**: Interactive Three.js scenes and 3D avatar
- 📱 **Fully Responsive**: Works perfectly on all devices
- ✉️ **Contact Form**: Integrated with EmailJS for easy communication
- 🚀 **Performance Optimized**: Fast loading and smooth scrolling

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Mantine UI (minimal usage)
- **Icons**: Tabler Icons
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Form Handling**: Mantine useForm + Yup validation
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bhargav278/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Configure EmailJS:

   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Set up an email service
   - Create an email template
   - Update `src/utils/emailService.js` with your credentials:
     - `serviceId`
     - `templateId`
     - `publicKey`

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Adding New Projects

To add a new project to your portfolio, simply edit `src/data/projectsData.js`:

```javascript
{
  id: 3,
  title: "Your Project Name",
  description: "Brief description of your project",
  techStack: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/yourusername/project",
  image: "/projects/project-screenshot.png",
  featured: false
}
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── three/          # Three.js 3D components
│   ├── data/           # Data files (projects, skills, etc.)
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette.

### Content

Update the data files in `src/data/`:

- `projectsData.js` - Your projects
- `skillsData.js` - Your skills and technologies
- `experienceData.js` - Work experience
- `educationData.js` - Education and certificates

## Deployment

This project can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Bhargav Vekariya

- Email: bhargav4596vekariya@gmail.com
- GitHub: [@bhargav278](https://github.com/bhargav278)
- LinkedIn: [bhargav-vekariya](https://linkedin.com/in/bhargav-vekariya)

---

**Designed & Developed by Bhargav Vekariya**
