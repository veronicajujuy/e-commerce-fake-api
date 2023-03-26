import { createContext, useState } from "react";
import axios from "axios";

const getValues = () => {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data))
    }

    const fetchProduct = (valor) => {
        axios.get(`https://fakestoreapi.com/products/${valor}`)
        .then(res => setProduct(res.data))
    }
    return ({
            product, products, fetchProducts, fetchProduct
        })
}

export const MyContext = createContext()

export const MyContextProvider = ({children}) => (
    <MyContext.Provider value={getValues()}>
        {children}
    </MyContext.Provider>
)