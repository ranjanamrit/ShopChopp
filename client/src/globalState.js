import axios from 'axios'
import React , {createContext , useState, useEffect} from 'react'
import ProductAPI from './api/ProductAPI'
import UserAPI from './api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, settoken] = useState(false)
    const refreshToken = async () => {
        const res = await axios.get('/user/refresh_token')
        settoken(res.data.accessToken)
    }
    useEffect(()=>{
        const firstlogin=localStorage.getItem('FirstLogin')
        if(firstlogin) refreshToken()
    },[])
    const state = {
        token: [token,settoken],
        ProductAPI: ProductAPI(),
        UserAPI: UserAPI(token)
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}