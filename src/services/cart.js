// quais ações meu carrinho pode fazer?

// Casos de uso:
// 1. Adicionar um item ✅
async function addItem(userCart, item) {
    userCart.push(item);
}

// 2. Verificar o total ✅
async function calculateTotal(userCart) {
    console.log("Shopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

// 3. Excluir uma quantidade do item ✅
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// 4. Remover um item do carrinho ✅
async function removeItem(userCart, index) {
    const deleteIndex = index - 1;

    if (deleteIndex >= 0 && deleteIndex < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

// 5. Exibir o carrinho ✅
async function displayCart(userCart) {
    userCart.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item.name} - R$ ${item.price} - ${item.quantity} | Subtotal: R$ ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}

