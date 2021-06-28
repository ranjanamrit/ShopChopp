import React,{useContext} from 'react'
import UserAPI from '../../../api/UserAPI'
import { GlobalState } from '../../../globalState'
import Loading from '../utils/Loading/Loading'
import ProductItems from '../utils/productItem/productItems'

export default function () {
    const state = useContext(GlobalState)
    const [products] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
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
