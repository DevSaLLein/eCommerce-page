export const quantityProduct = () => {
     const containerButtons = document.querySelector("[rel='js-quantity-product']");

     const lessButton = containerButtons?.childNodes.item(1);
     const plusButton = containerButtons?.childNodes.item(5);

     const handleClickButton = (operation: string | null) => {

          let quantity = Number(containerButtons?.childNodes.item(3).textContent);

          if(operation == '+') {

               quantity += 1;
          }

          else if(operation == '-') {

               if(quantity == 0 ) return;

               quantity -= 1
          }

          containerButtons!.childNodes.item(3).textContent = quantity.toString()
     }

     lessButton?.addEventListener('click', () => handleClickButton(lessButton.textContent));
     plusButton?.addEventListener('click', () => handleClickButton(plusButton.textContent));
}