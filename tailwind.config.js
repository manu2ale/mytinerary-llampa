/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            keyframes: {
                'slide-left': {
                    '0%': {
                        top: '-25rem',
                    },
                    '100%': {
                        top: '0rem'
                    }
                }
            },
            animation: {
                'slide-left': 'slide-from-left 3s'
            }
        }
    },
    variants: {},
    plugins: []
}
