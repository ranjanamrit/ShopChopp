import axios from 'axios'
import React,{useContext,useEffect} from 'react'
import { GlobalState } from '../../../globalState'
import Loading from '../utils/Loading/Loading'
import ProductItems from '../utils/productItem/productItems'

export default function Products() {
    const state = useContext(GlobalState)
    const [products,setProducts] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin


    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get('/api/products')
            setProducts(res.data.products)
        }
        getProduct()
    },[setProducts])
    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItems key={product._id} product={product}
                        isAdmin={isAdmin}
                    />
                })
            }
        </div>
        {products.length===0 && <Loading/>}
        </>
    )
}
