const initialState = {
  cart: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { cart: { ...action.payload } };
    }
    case "REMOVE_FROM_CART": {
      return { cart: {} };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
