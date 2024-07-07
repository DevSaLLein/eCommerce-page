window.addEventListener('load', (): void => {
   
    const menu = (): void => {
        const menuButton: HTMLBodyElement | null = document.querySelector("[rel='js-menu-button']");
     
        menuButton?.addEventListener('click', handleClickButtonMenu);
    }

    const handleClickButtonMenu = () => {
        const menuDropDown: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown']");
        const backdropEffect: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown-blur-effect']");

        menuDropDown?.classList.toggle('active-menu');
        backdropEffect?.classList.toggle('blur-menu-mobile-active');
    }

    menu();
});