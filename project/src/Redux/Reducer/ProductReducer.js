const initialState = {
    cartData: [],

};

export const productReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":

            let finditem = state.cartData.find((item) => {
                return item.id === action.payload.id
            })

            if (finditem) {
                console.log(finditem);
                finditem.quantity = finditem.quantity + 1
            } else {
                return {
                    ...state,
                    cartData: [...state.cartData, action.payload],
                }
            }



        case "REMOVE_FROM_CART":
            const filteredProduct = state.cartData.filter(
                (cartItem) => cartItem.id !== action.payload
            )
            return {
                ...state, cartData: filteredProduct,
            };



        case "SET_INCREMENT":
            const setincrementproduct = state.cartData.map((item) => {
                if (item.id === action.payload) {
                    // console.log(item);
                    let enterquantity = item.quantity + 1
                    return {
                        ...item, quantity: enterquantity,
                    }
                } else {
                    return item
                }
            })
            return {
                ...state, cartData: setincrementproduct,
            }


        case "SET_DECREMENT":
            const setdecrementproduct = state.cartData.map((item) => {
                if (item.id === action.payload) {
                    // console.log(item);
                    // let outquantity = item.quantity - 1
                    let outquantity = item.quantity > 1 ? item.quantity - 1 : 0
                    return {
                        ...item, quantity: outquantity,
                    }
                } else {
                    return item
                }
            })
            return {
                ...state, cartData: setdecrementproduct,
            }



        default:
            return state;
    }
};







