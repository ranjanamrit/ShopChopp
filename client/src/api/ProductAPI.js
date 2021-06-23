import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function ProductAPI() {
    const [products,setProducts] = useState([])

    const getProduct = async () => {
        const res = await axios.get('/api/products')
        setProducts(res.data.products)
    }

    useEffect(() => {
        getProduct()
    },[])
    return {
        products: [products,setProducts]
    }
}
