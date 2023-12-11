import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        drop: '0px -10px 4px 0px rgba(0, 0, 0, 0.20) inset, 0px 5px 10px 0px rgba(0, 0, 0, 0.50)',
        inner: '0px 5px 4px 0px rgba(0, 0, 0, 0.80) inset',
        button:'0px 6px 0px 0px #000',
        button_rotate: '6px 0px 0px 0px #000'
      },
    },
  },
  plugins: [],
}
export default config
