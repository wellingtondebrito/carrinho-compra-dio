import createItem from "./services/item.js"
import {addItemCart, calculateTotal, removeItem, deleteItemCart, displayCart} from './services/cart.js'


const cart = []
const myWhishList = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem("Teclado", 35.99, 1)
const item2 = await createItem("Mouse", 29.99, 2)

await addItemCart(cart, item1)
await addItemCart(cart, item2)
await displayCart(cart)

//await deleteItemCart(cart, item2.name)
//await deleteItemCart(cart, item1.name)

await calculateTotal(cart)

