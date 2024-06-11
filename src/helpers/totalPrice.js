export const totalPrice = (cartItems) => {
  return cartItems.reduce((acc, cur) => {
    if (cur.discountPrice) {
      return acc + cur.discountPrice * cur.quantity;
    } else {
      return acc + cur.price * cur.quantity;
    }
  }, 0);
};
