export const cartMenu = () => {
    const handleClickMenuCart = () => {
        const modalCart = document.querySelector("[rel='js-menu-cart-modal']");
        modalCart?.classList.toggle('cart-menu-active');
    };
    const menuCart = document.querySelector("[rel='js-menu-cart-button']");
    menuCart?.addEventListener('click', handleClickMenuCart);
};
