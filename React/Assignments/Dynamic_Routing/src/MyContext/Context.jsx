import { createContext , useState} from "react";

export const Mypage = createContext();
export const ContextProvider = ({children})=>{
    const [getProducts, setGetProducts] = useState([])
    return(
        <Mypage.Provider value={{getProducts,setGetProducts }}>
            {children}
        </Mypage.Provider>
    )
}