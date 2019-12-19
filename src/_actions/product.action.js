import ProductService from '../_services/product.service';
import { PRODUCTS } from '../_constants/products.constant';

const product = new ProductService();

export {
    getAllProduct,
    addProduct,
    removeProduct,
    updateProduct
}

function getAllProduct() {
    return dispatch => {
        return product.getAll().then(({ data }) => {
            dispatch({
                type: PRODUCTS.SET_ALL,
                data
            })
        });
    }
}

function addProduct(data) {
    return dispatch => {
        return product.addProduct(data).then((res) => {
            dispatch(getAllProduct())
        });
    }
}

function updateProduct(data) {
    return dispatch => {
        return product.updateProduct(data).then((res) => {
            dispatch(getAllProduct())
        });
    }
}

function removeProduct(item) {
    return dispatch => {
        return product.removeProduct(item.id).then((res) => {
            dispatch(getAllProduct())
        });
    }
}