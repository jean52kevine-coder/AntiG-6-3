/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
            },
            colors: {
                bg: '#05050F',
                bg2: '#08081A',
                card: '#0C0C22',
                card2: '#0F0F28',
                violet: '#7B2FFF',
                violetSoft: '#9B5FFF',
                cyan: '#00C2FF',
                textMain: '#FFFFFF',
                text2: '#8892B0',
                text3: '#3D3D5C',
            },
        },
    },
    plugins: [],
}
