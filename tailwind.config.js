/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: {
                        primary: '#050505',
                        secondary: '#0a0a0a',
                        tertiary: '#171717',
                    },
                    text: {
                        primary: '#ffffff',
                        secondary: '#a1a1aa',
                        tertiary: '#52525b',
                    },
                    border: '#27272a',
                },
                light: {
                    bg: {
                        primary: '#ffffff',
                        secondary: '#fafafa',
                        tertiary: '#f4f4f5',
                    },
                    text: {
                        primary: '#09090b',
                        secondary: '#52525b',
                        tertiary: '#a1a1aa',
                    },
                    border: '#e4e4e7',
                },
                primary: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #10b98133 0deg, #05966900 360deg)',
            },
        },
    },
    plugins: [],
}
