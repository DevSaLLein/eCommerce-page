export const mobileMenu = () => {

     const handleClickMenuMobile = (): void => {
          const menuDropDown: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown']");
          const backdropEffect: HTMLBodyElement | null = document.querySelector("[rel='js-menu-dropdown-blur-effect']");
     
          menuDropDown?.classList.toggle('active-menu');
          backdropEffect?.classList.toggle('blur-menu-mobile-active');
     }
     
     const menuButton: HTMLBodyElement | null = document.querySelector("[rel='js-menu-button']");
     menuButton?.addEventListener('click', handleClickMenuMobile);
}