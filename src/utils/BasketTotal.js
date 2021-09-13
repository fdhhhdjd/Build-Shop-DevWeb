export const getBasketTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);
