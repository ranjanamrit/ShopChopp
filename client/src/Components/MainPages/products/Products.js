import React,{useContext} from 'react'
import { GlobalState } from '../../../globalState'
import Loading from '../utils/Loading/Loading'
import ProductItems from '../utils/productItem/productItems'

export default function Products() {
    const state = useContext(GlobalState)
    const [products,setProduct] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    const [callBack,setcallBack] = state.ProductAPI.callBack




    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItems key={product._id} product={product} setproducts={setProduct}
                        isAdmin={isAdmin} token={token} callBack={callBack} setcallBack={setcallBack}
                    />
                })
            }
        </div>
        {products.length===0 && <Loading/>}
        </>
    )
}
