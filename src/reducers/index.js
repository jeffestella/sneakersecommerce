import { combineReducers } from 'redux';

const cartReducer = (cartContents = {}, action) => {
    if (action.type === "ADD_TO_CART") {
        const productID = action.payload.productID;
        const addQty = action.payload.quantity;
        if (Object.keys(cartContents).includes(productID)) {
            const oldQty = cartContents[productID];
            const cartArray = Object.entries(cartContents);
            const filtered = cartArray.filter( ([key, value]) => {
                return key !== productID
            })
            const filteredCart = Object.fromEntries(filtered);
            return filteredCart[productID] = oldQty + addQty
        } else {
            return {...cartContents, productID: addQty}
        }
        //check if cartContents already has the item in it 
        // const checkArray = (itemID) => {
        //     cartContents.some((item) => {
        //         return Object.keys(item).includes(itemID)
        //     })
        // }
        // if (checkArray(action.payload.productID)) {
        //     return cartContents.filter()
        // }
    } else if (action.type === "CLEAR_CART") {
        return {};
    }
}

export default combineReducers({
    cartContents: cartReducer
})