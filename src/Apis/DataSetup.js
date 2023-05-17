import axios from "axios"

export const getProducts = () => { return axios.get("http://cozshopping.codestates-seb.link/api/v1/products") };