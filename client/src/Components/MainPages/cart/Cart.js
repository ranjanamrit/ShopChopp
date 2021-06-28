import React,{useContext,useState,useEffect} from 'react'
import {GlobalState} from '../../../globalState'
import {Link} from 'react-router-dom'

export default function Cart() {
    const state = useContext(GlobalState)
    const [cart,setcart] = state.UserAPI.cart
    const [total, settotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev,item)=>{
                return prev + (item.price * item.quantity)
            },0)
            settotal(total)
        }
        getTotal()
    },[cart])

    const increment = (id) => {
        cart.forEach(item => {
            if(item._id===id){
                item.quantity+=1
            }
        });
        setcart([...cart])
    }
    const decrement = (id) => {
        cart.forEach(item => {
            if(item._id === id){
                item.quantity===1?item.quantity=1:item.quantity-=1
            }
        });
        setcart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item,index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            });
            setcart([...cart])
        }
    }
    if(cart.length === 0){
        return <h2 style={{textAlign:'center', fontSize:'5rem'}}>Cart Empty</h2>
    }
    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart">
                        <img src={product.images.url} alt=""></img>
                        <div className="box-detail">
                            <h2>{product.title}</h2>
                            <h3>₹{product.price*product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <div className="amount">
                                <button onClick={()=> decrement(product._id)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={()=> increment(product._id)}>+</button>
                            </div>
                        <div className="delete" onClick={()=> removeProduct(product._id)}>X</div>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <h3>Total: ₹ {total} </h3>
                <Link to='#!'>Payment</Link>
            </div>
        </div>
    )
}
