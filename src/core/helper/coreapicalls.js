import { API } from '../../backend';
// API = Kevin
// `${Api}/aslfdldf`
// "Kevin/aslfdldf"
// http://localhost:1111/api/products
export const getProduct = () => {
    return fetch(`${API}/products`,{
        method: "GET"
    })
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
        console.log(error)
    })
}