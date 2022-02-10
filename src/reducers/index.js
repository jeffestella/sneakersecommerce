import { combineReducers } from 'redux';

const cartReducer = (cartContents = {}, action) => {
    if (action.type === "ADD_TO_CART") {
        const productID = action.payload.productID;
        const newCartContents = {...cartContents};
        const oldQty = cartContents[productID];
        const addQty = action.payload.quantity;
        if (Object.keys(cartContents).includes(productID)) {
            newCartContents[productID] = oldQty + addQty;
            return newCartContents;
        } else {
            newCartContents[productID] = addQty;
            return newCartContents;
        }
    } else if (action.type === "CLEAR_CART") {
        return {};
    } else {
        return cartContents
    }
}

export default combineReducers({
    cartContents: cartReducer
})