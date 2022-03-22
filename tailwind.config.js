module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-ping': 'ping 1s linear infinite',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
