import axios from 'axios'
import React,{useState} from 'react'
import Loading from '../Loading/Loading'
import BtnRender from './BtnRender'

export default function ProductItems({product,isAdmin,token,callBack,setcallBack}) {
    const [loading,setLoading] = useState(false)
    const deleteItem = async () => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy',{public_id:product.images.public_id},{
                headers:{Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${product._id}`,{
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

    const handleCheck = () => {
        product.checked = !product.checked
        
    }
    if(loading) return <div className="product-card">  <Loading/> </div>
    return (
        <div className="product-card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={handleCheck}/>
            }
            <img src={product.images.url} alt=""></img>
            <div className="product-box">
                <h2 title={product.title}>{product.title}</h2>
                <span>₹{product.price}</span>
                <p>{product.description}</p>
            </div>
        <BtnRender product={product} deleteItem={deleteItem}></BtnRender>
            
        </div>
    )
}
