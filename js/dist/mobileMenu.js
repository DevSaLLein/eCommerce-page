export const mobileMenu = () => {
    const handleClickMenuMobile = () => {
        const menuDropDown = document.querySelector("[rel='js-menu-dropdown']");
        const backdropEffect = document.querySelector("[rel='js-menu-dropdown-blur-effect']");
        menuDropDown?.classList.toggle('active-menu');
        backdropEffect?.classList.toggle('blur-menu-mobile-active');
    };
    const menuButton = document.querySelector("[rel='js-menu-button']");
    menuButton?.addEventListener('click', handleClickMenuMobile);
};
