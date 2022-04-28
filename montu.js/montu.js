import { SHOW_ERR, CLEAR_ERR } from "./types";

/** actions for toggling error message */
export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}
export function getProductsFromApi(token) {
	return async function(dispatch) {
		try {
			const products = await SublyApi.getStripeProducts(token);
			dispatch(getProducts(products));
		} catch (err) {
			dispatch(showErr(err));
		}
	};
}
function getProducts(products) {
	return {
		type     : FETCH_PRODUCTS,
		products
	};
}
export function clearErr() {
  return { type: CLEAR_ERR };
}
