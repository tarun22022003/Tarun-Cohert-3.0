import { createContext, useState} from "react";

export const MyStore = createContext();

export const ContextProvider = ({children})=>{
      const [addCart, setAddCart] = useState([]);
      const [toggle, setToggle] = useState(true);


return(
    <MyStore.Provider value ={{addCart, toggle, setToggle,setAddCart}}>
        {children}
    </MyStore.Provider>
)
}