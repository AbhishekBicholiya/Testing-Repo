import { SHOW_ERR, CLEAR_ERR } from "./types";
import SublyApi from '../helpers/Api';
import { FETCH_PRODUCTS, REMOVE_PRODUCTS } from './types';
import { showErr } from './errors';

/** Function for retrieving and storing stripe products 
 * 
 * This will get all active products on the Jane Rothe Stripe account
 * 
 * Returns {products: [{id...unit_amount... product:{name, description}...}...]}
*/
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

export function removeProducts() {
	return {
		type : REMOVE_PRODUCTS
	};
}

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
