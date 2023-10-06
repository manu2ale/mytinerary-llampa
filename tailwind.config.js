/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-bottom': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100px) scale(0.9)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    }
                },
                'fade-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(100px) scale(0.9)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    }
                },
                'fade-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(240px) scale(0.9)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0) scale(1)'
                    }
                },
                'fade-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-240px) scale(0.9)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0) scale(1)'
                    }
                }
            },
            animation: {
                'fade-bottom': 'fade-bottom 0.5s',
                'fade-up': 'fade-up 0.5s',
                'fade-left': 'fade-left 0.5s',
                'fade-right': 'fade-right 0.5s'
            }
        },
    },
    variants: {},
    plugins: []
}
