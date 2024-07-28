import { quantityProduct } from "./quantityProduct.js";

window.addEventListener('load', (): void => {
   
    const menus = (): void => {
        const menuButton: HTMLBodyElement | null = document.querySelector("[rel='js-menu-button']");
        const menuCart: HTMLBodyElement | null = document.querySelector("[rel='js-menu-cart-button']");
     
        menuButton?.addEventListener('click', handleClickMenuMobile);
        menuCart?.addEventListener('click', handleClickMenuCart);
    }

    const handleClickMenuMobile = (): void => {
        const menuDropDown: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown']");
        const backdropEffect: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown-blur-effect']");

        menuDropDown?.classList.toggle('active-menu');
        backdropEffect?.classList.toggle('blur-menu-mobile-active');
    }

    const handleClickMenuCart = (): void => {
        const modalCart: HTMLBodyElement | null = document.querySelector("[rel='js-menu-cart-modal']");

        modalCart?.classList.toggle('cart-menu-active');
    }

    menus();
    quantityProduct();
});