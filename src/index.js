require('./style.scss');
console.log('Hello World');


const responsiveNav = require('responsive-nav');
require('responsive-nav/client/dist/styles/responsive-nav.css');

const nav = responsiveNav('nav');

if (window.matchMedia("(min-width: 35em)").matches) {
  console.log('bonjour');
}
