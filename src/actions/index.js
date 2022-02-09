export const addToCart = (productID, quantity) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            productID: productID,
            quantity: quantity
        }
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART",
        payload: null
    }
}