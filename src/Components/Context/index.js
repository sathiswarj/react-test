//Create the context
//Provide the state to context
//Wrap context in root component
//Consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);

    async function fetchProductList(){
        const response = await fetch("https://dummyjson.com/products")
        const result = await response.json()
        console.log(result)
         if(result && result?.products){
            setListOfProducts(result?.products)
            setLoading(false)
         }
    }

    useEffect(()=>{
      fetchProductList()
    },[])
    return (
        <shopContext.Provider value={{listOfProducts, loading}}>
            {children}
        </shopContext.Provider>
    );
}

export default ShoppingCartProvider;

