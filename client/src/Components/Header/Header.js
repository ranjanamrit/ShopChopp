import React, { useContext , useState } from 'react'
import {GlobalState} from '../../globalState'
import Menu from './icons/menu.svg'
import Cart from './icons/cart.svg'
import Close from './icons/cross.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    const value = useContext(GlobalState)
    return (
        <header>
            <div className='menu'>
                <img src={Menu} alt="" width="30"></img>
            </div>
            <div className='logo'>
                <h1>
                    <Link to="/">ShopChop</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/login">Login/Register</Link></li>
                <li>
                    <img src={Close} alt="" width="30" className="menu"></img>
                </li>
            </ul>

            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30"></img>                
                </Link>
            </div>
        </header>
    )
}
