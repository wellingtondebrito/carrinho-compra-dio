const createItem = async (name, price, qtd) => {
    return {
        name,
        price,
        qtd,
        subtotal: () => price * qtd
    }
}

export const removeItem = async (userCart, indexItem) => {

    const deleteIndex = indexItem - 1

    if(indexItem >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
};

export default createItem