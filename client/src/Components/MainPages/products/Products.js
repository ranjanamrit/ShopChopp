import axios from 'axios'
import React,{useContext,useState} from 'react'
import { GlobalState } from '../../../globalState'
import Loading from '../utils/Loading/Loading'
import ProductItems from '../utils/productItem/productItems'

export default function Products() {
    const state = useContext(GlobalState)
    const [products,setProducts] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    const [callBack,setcallBack] = state.ProductAPI.callBack
    const [loading,setLoading] = useState(false)


    const handleCheck = (id) => {
        console.log(id)
    }

    const deleteItem = async (id,public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy',{public_id},{
                headers:{Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`,{
                headers:{Authorization: token}
            })
            await destroyImg
            await deleteProduct
            setLoading(false)
            setcallBack(!callBack)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    if(loading) return <div className="product"> <Loading></Loading></div>
    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItems key={product._id} product={product}
                        isAdmin={isAdmin} deleteItem= {deleteItem} handleCheck={handleCheck}
                    />
                })
            }
        </div>
        {products.length===0 && <Loading/>}
        </>
    )
}
