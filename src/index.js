import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishlist = [];

console.log("Bem vindo ao seu carrinho da Shopee!");

const item1 = await createItem("Camiseta", 29.99, 2);
const item2 = await createItem("Calça", 59.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.removeItem(myCart, 2);

cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

