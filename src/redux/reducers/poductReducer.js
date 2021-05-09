
import { FETCH_PRODUCT } from './../types/type';

const initialStates={};

export const poductReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PRODUCT:
        return { items: action.payload };
      default:
        return state;
    }
  };