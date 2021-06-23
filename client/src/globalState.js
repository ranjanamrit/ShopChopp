import React , {createContext , useState} from 'react'
import ProductAPI from './api/ProductAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, settoken] = useState(false)
    const state = {
        token: [token,settoken],
        ProductAPI: ProductAPI()
    }
    ProductAPI()
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}