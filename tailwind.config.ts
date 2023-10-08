import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './components/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#393E46',
                    shadow900: '#393e4680',
                    500: '#929AAB',
                    200: '#EEEEEE',
                    100: '#F7F7F7',
                },
                helpers: {
                    yellow: '#FCF6B1',
                    green: '#A9E5BB'
                },
                purple: {
                    800: '#3D293F'
                },
                background: '#FFFFFF',
                darkBackground: '#1E1E1E'
            },
            width: {
                cardLittle: '150px'
            },
            boxShadow: {
                'alert': '0px 17px 40px 0px rgba(57, 62, 70, 0.20);'
            }

        },
    },
    plugins: [],
}
export default config
