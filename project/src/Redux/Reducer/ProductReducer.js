
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

//------------

// const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "ADD_TO_CART":
//         return {
//           ...state,
//           cartData: state.cartData.map((item) =>
//             item.id === action.payload
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       case "REMOVE_FROM_CART":
//         return {
//           ...state,
//           cartData: state.cartData.map((item) =>
//             item.id === action.payload && item.quantity > 1
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           ),
//         };
//       default:
//         return state;
//     }
//   };
  