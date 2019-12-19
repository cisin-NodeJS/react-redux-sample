import { http } from '../_helpers/request.helper';

export default function ProductService() {

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            http.get(`/products`).then(resolve).catch(err => reject(err));
        })
    }

    this.addProduct = (data) => {
        return new Promise((resovle, reject) => {
            http.post(`/products`, data).then(resovle).catch(err => reject(err));
        });
    }

    this.removeProduct = (_id) => {
        return new Promise((resolve, reject) => {
            http.delete('/products/' + _id).then(resolve).catch(reject);
        });
    }

    this.updateProduct = (data) => {
        return new Promise((resolve, reject) => {
            http.put('/products/' + data.id, data).then(resolve).catch(reject);
        });
    }   

    return this;
};