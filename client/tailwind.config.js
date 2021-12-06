module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                '8vh': '8vh',
                '10vh': '10vh',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
