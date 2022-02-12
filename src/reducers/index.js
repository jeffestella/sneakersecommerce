import { combineReducers } from 'redux';

const cartReducer = (cartContents = 0, action) => {
    if (action.type === "ADD_TO_CART") {
        // console.log('addtocart')
        // const productID = action.payload.productID;
        // let newCartContents = {...cartContents};
        // const oldQty = cartContents[productID];
        // const addQty = action.payload.quantity;
        // if (Object.keys(cartContents).includes(productID)) {
        //     newCartContents[productID] = oldQty + addQty;
        //     return newCartContents;
        // } else {
        //     newCartContents[productID] = addQty;
        //     return newCartContents;
        // }
        const addQty = action.payload.quantity;
        return cartContents + addQty;
    } else if (action.type === "CLEAR_CART") {
        return {};
    } else {
        return cartContents
    }
}

export default combineReducers({
    cartContents: cartReducer
})