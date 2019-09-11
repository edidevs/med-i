export const addItemToCart = item => ({
  type: 'ADD_ITEM_CART',
  payload: item,
});

export const removeItemFromCart = item => ({
  type: 'REMOVE_ITEM_CART',
  payload: item,
});
