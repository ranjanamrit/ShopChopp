import React,{useContext} from 'react'
import { GlobalState } from '../../../globalState'
import Loading from '../utils/Loading/Loading'
import ProductItems from '../utils/productItem/productItems'

export default function () {
    const state = useContext(GlobalState)
    const [products] = state.ProductAPI.products
    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItems key={product._id} product={product}/>
                })
            }
        </div>
        {products.length===0 && <Loading/>}
        </>
    )
}
