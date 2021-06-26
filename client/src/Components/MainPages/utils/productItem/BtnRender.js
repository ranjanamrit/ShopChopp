import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnRender({product}) {
    return (
        <div>
            <div className="row-btn">
                <Link id="btn-buy" to="#!">
                    Buy
                </Link>
                <Link id="btn-view" to={`/details/${product._id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}
