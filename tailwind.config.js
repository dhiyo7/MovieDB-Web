module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        search : "#2F363F",
        slider : "#1E232A",
        navbar : "#292E35",
        line : "#E74C3C"
      },
      spacing: {
        '18' : '72px',
        '22' : '92px',
        '29' : '123px',
        '30' : '125px',
        '34' : '139px',
        '46' : '182px',
        '55' : '210px',
        '66' : '258px',
        '98' : '460px',
        '99' : '470px',
        '105' : '490px',
        '110' : '520px',
        '120' : '580px',
        '130' : '685px',
        '140' : '790px',
        '150' : '900px',
        '160' : '1040px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
