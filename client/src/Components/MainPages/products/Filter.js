import React,{useContext} from 'react'
import { GlobalState } from '../../../globalState'


export default function Filter() {
    const state = useContext(GlobalState)
    const [categories] = state.CategoriesAPI.categories
    const [products,setProducts] = state.ProductAPI.products
    const [category,setCategory] = state.ProductAPI.category
    const [sort, setSort] = state.ProductAPI.sort
    const [search, setSearch] = state.ProductAPI.search
    return (
        <div className="filter-menu">
            <div className="row">
                <span>Filters:</span>
                <select name="category" value={category}>
                    <option value="">All product</option>
                    {
                        categories.map(category => (
                            <option value={"category="+category._id} key={category._id}>{category.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
