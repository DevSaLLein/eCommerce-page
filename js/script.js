"use strict";
window.addEventListener('load', () => {
    console.log('hello');
    const menu = () => {
        const menuButton = document.querySelector("[rel='js-menu-button']");
        menuButton?.addEventListener('click', handleClickButtonMenu);
    };
    const handleClickButtonMenu = () => {
        const menuDropDown = document.querySelector("[rel='js-menu-dropdown']");
        const backdropEffect = document.querySelector("[rel='js-menu-dropdown-blur-effect']");
        menuDropDown?.classList.toggle('active-menu');
        backdropEffect?.classList.toggle('blur-menu-mobile-active');
    };
    menu();
});
