
const initialState = {
    cartData: [],
    // products: [],
};

export const productReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            };


        default:
            return state;
    }
};