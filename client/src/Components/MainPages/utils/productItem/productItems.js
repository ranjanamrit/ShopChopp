import React from 'react'
import BtnRender from './BtnRender'

export default function productItems({product}) {
    return (
        <div className="product-card">
            <img src={product.images.url} alt=""></img>
            <div className="product-box">
                <h2 title={product.title}>{product.title}</h2>
                <span>₹{product.price}</span>
                <p>{product.description}</p>
            </div>
        <BtnRender product={product}></BtnRender>
            
        </div>
    )
}
