
import { FETCH_PRODUCT } from './../types/type';

export const fetchProductAction = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/products/");
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCT,
    payload: data,
  });
};

 