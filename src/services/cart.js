export const addItemCart = async (userCart, item) => {
  userCart.push(item);
};

export const deleteItemCart = async (userCart, nameItem) => {
  const index = userCart.findIndex((item) => item.name === nameItem);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
};

export const removeItem = async (userCart, item) => {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(indexFound === -1 ){
        console.log('Item não encontrado')
        return
    }

    if(userCart[indexFound].qtd > 1){
        userCart[indexFound].qtd -= 1
        return
    }

    if(userCart[indexFound].qtd === 1){
        userCart.splice(indexFound, 1)
        return
    }
};

export const calculateTotal = async (userCart) => {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  result === 0
    ? console.log("Your Shopee Cart is Empyt")
    : console.log(`\nShopee Cart Total IS: \n\nTotal: R$:${result}`);
};

export const displayCart = async (userCart) => {
  console.log("Shopee Cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$:${item.price} | ${
        item.qtd
      }x | Subtotal ${item.subtotal()}`
    );
  });
};
