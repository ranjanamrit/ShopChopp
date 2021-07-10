import axios from 'axios'
import {useState,useEffect} from 'react'

export default function ProductAPI() {
    const [products,setProducts] = useState([])
    const [callBack,setcallBack] = useState(false)
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get('/api/products')
            setProducts(res.data.products)
        }
        getProduct()
    },[callBack])

    return {
        products: [products,setProducts],
        callBack: [callBack,setcallBack]
    }
}
