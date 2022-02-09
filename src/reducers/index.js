import { combineReducers } from 'redux';

const cartReducer = (cartContents = [], action) => {
    if (action.type === "ADD_TO_CART") {
        //check if cartContents already has the item in it 
        const checkArray = (itemID) => {
            cartContents.some((item) => {
                Object.keys(item).includes(itemID)
            })
        }
        if (checkArray(action.payload.itemID)) {
            return
        }
    }
}

export default combineReducers({
    cartContents: cartReducer
})