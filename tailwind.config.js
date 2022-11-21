module.exports = {
  theme: {
    extend: {
      colors: {
        //purples
        "primary-color": "var(--primary-color)",
        "primary-color-light": "var(--primary-color-light)",

        //grays
        "secondary-color": "var(--secondary-color)", 


        //3B82F6  great-blue 
        'great-blue': {  DEFAULT: '#3B82F6',  '50': '#EBF2FE',  '100': '#D7E6FD',  '200': '#B0CDFB',  '300': '#89B4FA',  '400': '#629BF8',  '500': '#3B82F6',  '600': '#0B61EE',  '700': '#084BB8',  '800': '#063583',  '900': '#041F4D'},        //4E4E4E great-gray
       
        'great-gray': {  DEFAULT: '#4E4E4E',  '50': '#9E9E9E',  '100': '#959595',  '200': '#848484',  '300': '#727272',  '400': '#606060',  '500': '#4E4E4E',  '600': '#323232',  '700': '#161616',  '800': '#000000',  '900': '#000000'},
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
