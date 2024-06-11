import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QUANTITY,
  APPLY_PROMO_CODE,
} from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const setQuantity = (productId, quantity) => ({
  type: SET_QUANTITY,
  payload: { productId, quantity },
});

export const applyPromoCode = () => ({
  type: APPLY_PROMO_CODE,
});
