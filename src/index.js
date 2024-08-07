import { generateHome } from './generateHome';
import { generateMenu } from './generateMenu';
import { generateAbout } from './generateAbout';

import './style.css';


const main = document.querySelector('#main');

const mainButton = document.querySelector("#home-button");
mainButton.addEventListener("click", () => {
    clearMain();
    const homePage = generateHome();
    main.appendChild(homePage);
})

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
    clearMain();
    const menuPage = generateMenu();
    main.appendChild(menuPage);
})

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", () => {
    clearMain();
    const aboutPage = generateAbout();
    main.appendChild(aboutPage);
})

const clearMain = () => {
    main.innerHTML = "";
}


//main.appendChild(generateHome());
//main.appendChild(generateMenu());