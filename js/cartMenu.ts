export const cartMenu = () => {

     const handleClickMenuCart = (): void => {
          const modalCart: HTMLBodyElement | null = document.querySelector("[rel='js-menu-cart-modal']");
          
          modalCart?.classList.toggle('cart-menu-active');
     }
          
     const menuCart: HTMLBodyElement | null = document.querySelector("[rel='js-menu-cart-button']");
          
     menuCart?.addEventListener('click', handleClickMenuCart);     
} 