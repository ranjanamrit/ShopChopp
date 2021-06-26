import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import detailProduct from './DetailProducts/DetailProduct'
import Products from './products/Products'
import NotFound from './utils/not_found/NotFound'


export default function MainPages() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Products}></Route>
                <Route path="/details/:id" exact component={detailProduct}></Route>
                <Route path='/cart' exact component={Cart}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/register' exact component={Register}></Route>
                <Route path='*' exact component={NotFound}></Route>
            </Switch>
        </div>
    )
}
