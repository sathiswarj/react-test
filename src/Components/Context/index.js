//Create the context
//Provide the state to context
//Wrap context in root component
//Consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

function ShoppingCartProvider({ children, productId }) {
    const [loading, setLoading] = useState(true);
     const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);

    async function fetchProductList() {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            if (result?.products) {
                setListOfProducts(result.products);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    }

    useEffect(() => {
        fetchProductList();
    },[]);

    return (
        <shopContext.Provider value={{ 
            listOfProducts, 
            loading, 
            productDetails,
            setProductDetails,
            setLoading 
        }}>
            {children}
        </shopContext.Provider>
    );
}

export default ShoppingCartProvider;
