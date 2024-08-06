import { generateAbout } from './generateAbout';
import { generateHome } from './generateHome';
import { generateMenu } from './generateMenu';

import './style.css';

console.log("Webpack test!!");

const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', () => {
    const homePage = generateHome();
    document.body.appendChild(homePage);
});

//main.appendChild(generateHome());
//main.appendChild(generateMenu());