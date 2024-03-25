/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#51cf66',
                secondary: '#000000',
                warning: '#FF7800',
                accent: '#9e9e9e',
            },
            fontFamily: {
                primary: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
