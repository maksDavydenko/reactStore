import {
  ADD_TO_CART,
  APPLY_PROMO_CODE,
  REMOVE_FROM_CART,
  SET_QUANTITY,
} from "./actionTypes";

const initialState = {
  cartItems: [],
  isDiscount: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return state;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case SET_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case APPLY_PROMO_CODE:
      return {
        ...state,
        isDiscount: true,
      };

    default:
      return state;
  }
};

export default appReducer;
