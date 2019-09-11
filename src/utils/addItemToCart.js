export const changeItemQuantityInCart = (cartItems, cartItemToAdd) => {
  const itemAlreadyInCart = cartItems.find(
    cartItem => cartItem.itemName === cartItemToAdd.itemName
  );

  if (itemAlreadyInCart) {
    return cartItems.map(cartItem =>
      cartItem.itemName === cartItemToAdd.itemName
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// const itemAlreadyInCart = (cartItems, cartItemToAdd) =>
//   cartItems.find(cartItem => cartItem.itemName === cartItemToAdd.itemName);

// const increaseThatItemQuantity = (cartItems, cartItemToAdd) =>
//   cartItems.map(cartItem =>
//     cartItem.itemName === cartItemToAdd.itemName
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//   );

// export const changeItemQuantityInCart = (cartItems, cartItemToAdd) => {
//   if (itemAlreadyInCart(cartItems, cartItemToAdd))
//     increaseThatItemQuantity(cartItems, cartItemToAdd);
//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };
