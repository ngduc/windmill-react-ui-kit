const windmill = require('../config')

module.exports = windmill({
  purge: ['./src/**/*.{html,js,ts,tsx}'],
  // purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
})
