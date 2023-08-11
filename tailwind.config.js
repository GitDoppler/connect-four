/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors:{
                'custom-purple':'hsl(257,100%,64%)',
                'custom-yellow':'hsl(41,100%,70%)',
                'custom-dark-purple':'hsl(257,67%,51%)',
                'custom-pink':'hsl(347,97%,70%)'
            },
        },
    },
    plugins: [],
}
