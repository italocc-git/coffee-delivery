module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: '320px',
      md: '600px',
      lg: '1000px'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'baloo': ['Baloo 2', 'sans-serif']
      },
      colors: {
        product: {
          "yellow-dark": "#C47F17",
          "yellow": "#DBAC2C",
          "yellow-light": "#F1E9C9",
          "purple-dark": "#4B2995",
          "purple": "#8047F8",
          "purple-light": "#EBE5F9",
        },
        base: {
          "title": "#272221",
          "subtitle": "#403937",
          "text": "#574f4d",
          "label": "#8d8686",
          "hover": "#d7d5d5",
          "button": "#e6e5e5",
          "input": "#ededed",
          "card": "#f3f2f2",
          "background": "#FAFAFA",
          "white": "#FFFFFF"
        }
      },
      borderRadius: {
        md: '4px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
