import React,{useContext} from 'react'
import { GlobalState } from '../../../globalState'


export default function Filter() {
    const state = useContext(GlobalState)
    const [products,setProducts] = state.ProductAPI.products
    return (
        <div className="filter-menu">
            <div className="row">
                <span>Filters:</span>
                <select name="category"></select>
            </div>
        </div>
    )
}
