"use strict";
window.addEventListener('load', () => {
    const menus = () => {
        const menuButton = document.querySelector("[rel='js-menu-button']");
        const menuCart = document.querySelector("[rel='js-menu-cart-button']");
        menuButton?.addEventListener('click', handleClickMenuMobile);
        menuCart?.addEventListener('click', handleClickMenuCart);
    };
    const handleClickMenuMobile = () => {
        const menuDropDown = document.querySelector("[rel='js-menu-dropdown']");
        const backdropEffect = document.querySelector("[rel='js-menu-dropdown-blur-effect']");
        menuDropDown?.classList.toggle('active-menu');
        backdropEffect?.classList.toggle('blur-menu-mobile-active');
    };
    const handleClickMenuCart = () => {
        const modalCart = document.querySelector("[rel='js-menu-cart-modal']");
        modalCart?.classList.toggle('cart-menu-active');
    };
    menus();
});
