const itemAlreadyInCart = (cartItems, cartItemToAdd) =>
  cartItems.find(cartItem => cartItem.itemName === cartItemToAdd.itemName);

const increaseThatItemQuantity = (cartItems, cartItemToAdd) =>
  cartItems.map(cartItem =>
    cartItem.itemName === cartItemToAdd.itemName
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

const createNewItemWithQuantityOne = (cartItems, cartItemToAdd) => [
  ...cartItems,
  { ...cartItemToAdd, quantity: 1 },
];

export const changeItemQuantityInCart = (cartItems, cartItemToAdd) => {
  if (itemAlreadyInCart(cartItems, cartItemToAdd)) {
    return increaseThatItemQuantity(cartItems, cartItemToAdd);
  }
  return createNewItemWithQuantityOne(cartItems, cartItemToAdd);
};
