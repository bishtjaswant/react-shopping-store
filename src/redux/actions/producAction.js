
import { FETCH_PRODUCT, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from './../types/type';

export const fetchProductAction = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/products/");
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCT,
    payload: data,
  });
};



export const filterProductsAction = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};  



export const sortProductsAction = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};