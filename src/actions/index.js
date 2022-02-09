export const addToCart = (item, quantity) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            itemID: item.id,
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