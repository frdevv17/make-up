import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from "../actions/action-types";

const initialState = {
  cart_products: [],
};

function checkDecrement(count) {
  if (count >= 1) {
    return count - 1;
  }
  return count;
}

const cartReducer = (state = initialState, action) => {
  let p_i;
  switch (action.type) {
    case ADD_TO_CART:
      p_i = state.cart_products.findIndex(
        (product) => product.id === action.product.id
      );
      let newcart = state.cart_products;
      if (p_i === -1) {
        newcart = [...state.cart_products, action.product];
      }
      return {
        cart_products: newcart,
      };
    case INCREMENT_COUNT:
    case DECREMENT_COUNT:
      p_i = state.cart_products.findIndex(
        (product) => product.id === action.product.id
      );
      let addedcart = state.cart_products.map((product, index) => {
        if (index === p_i) {
          product.count =
            action.type === INCREMENT_COUNT
              ? product.count + 1
              : checkDecrement(product.count);
        }
        return product;
      });
      addedcart = state.cart_products.filter((product) => product.count > 0);
      return {
        cart_products: addedcart,
      };
    case REMOVE_FROM_CART:
      p_i = state.cart_products.findIndex(
        (product) => product.id === action.product.id
      );
      let removeditem = state.cart_products.filter(
        (_, index) => index !== p_i
      );
      return {
        cart_products: removeditem,
      };
    default:
      return state;
  }
};

export { cartReducer };
