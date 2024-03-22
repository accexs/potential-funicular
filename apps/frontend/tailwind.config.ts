import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brandGreen: '#64EEBC',
                brandGray: '#242424'
            },
            fontFamily: {
                bn: ['var(--font-bn)']
            }
        },
    },
    plugins: [],
};
export default config;
