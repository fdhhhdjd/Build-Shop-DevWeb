import * as types from "./Actiontypes";
const initialState = {
  basket: [],
  cart: [],
  loading: false,
  users: null,
  error: null,
  currentItem: null,
};
const basketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_ALL_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        basket: action.payload,
      };
    case types.FETCH_ALL_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case types.ADD_TO_BASKET:
      // const newBasket = [...state.basket, action.payload];
      // return { ...state, basket: newBasket };
      // Great Item data from products array
      const item = state.basket.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case types.REMOVE_FROM_BASKET:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case types.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case types.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case types.SET_BASKET_EMPTY:
      return {
        ...state,
        basket: [],
      };
    // case types.SEARCH_ALL_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.SEARCH_ALL_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     basket: action.payload,
    //   };
    // case types.SEARCH_ALL_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};
export default basketReducer;
