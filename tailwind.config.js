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
            spacing:{
                'board' : 'clamp(20.94rem,calc(3.23rem + 75.57vw), 39.50rem)',
                'puck' : 'calc(100% + 0.5rem)',
                'button' : 'clamp(2.13rem,calc(0.34rem + 7.63vw), 4.00rem)',
                'container-button' :'clamp(20.94rem,calc(3.23rem + 75.57vw), 39.50rem)',
                'container-gap' : 'clamp(0.81rem,calc(0.16rem + 2.80vw), 1.50rem)',
                'scoreboard' : 'clamp(8.88rem,calc(1.12rem + 33.08vw), 17.00rem)' 
            }
        },
    },
    plugins: [],
}
