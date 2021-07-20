import React,{useContext} from 'react'
import { GlobalState } from '../../../globalState'


export default function Filter() {
    const state = useContext(GlobalState)
    const [categories] = state.CategoriesAPI.categories
    const [products,setProducts] = state.ProductAPI.products
    const [category,setCategory] = state.ProductAPI.category
    const [sort, setSort] = state.ProductAPI.sort
    const [search, setSearch] = state.ProductAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
    }
    return (
        <div className="filter-menu">
            <div className="row">
                <span>Filters:</span>
                <select name="category" value={category} onChange={handleCategory}>
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
