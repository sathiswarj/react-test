//Create the context
//Provide the state to context
//Wrap context in root component
//Consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext(null);

function ShoppingCartProvider({ children, productId }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItem, setCartItem] = useState([]);
    const navigate = useNavigate();

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

    const handleAddToCart = (getProductDetails) => {
        const currentItems = [...cartItem];
        const findCurrentProductIndex = currentItems.findIndex(
            (item) => item.id === getProductDetails.id
        );

        if (findCurrentProductIndex === -1) {
            currentItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price,
            });
        } else {
             currentItems[findCurrentProductIndex] = {
                ...currentItems[findCurrentProductIndex],
                quantity : currentItems[findCurrentProductIndex].quantity + 1,
                totalPrice: (currentItems[findCurrentProductIndex].quantity + 1) * currentItems[findCurrentProductIndex].price 
             }
        }

        setCartItem(currentItems);
        localStorage.setItem("Cart", JSON.stringify(currentItems));
        navigate("/cart-list");
    };

    const handleRemoveCart = (getProductDetails, isFullyRemove) => {
        const currentItems = [...cartItem];
        const findCurrentProductIndex = currentItems.findIndex(
            (item) => item.id === getProductDetails.id
        );
    
        if (findCurrentProductIndex === -1) return;  
    
        if (isFullyRemove) {
             currentItems.splice(findCurrentProductIndex, 1);
        } else {
            const updatedQuantity = currentItems[findCurrentProductIndex].quantity - 1;
            
            if (updatedQuantity <= 0) {
                 currentItems.splice(findCurrentProductIndex, 1);
            } else {
                 currentItems[findCurrentProductIndex] = {
                    ...currentItems[findCurrentProductIndex],
                    quantity: updatedQuantity,
                    totalPrice: updatedQuantity * currentItems[findCurrentProductIndex].price
                };
            }
        }
    
         localStorage.setItem("Cart", JSON.stringify(currentItems));
        setCartItem(currentItems);
    };
    

    useEffect(() => {
        fetchProductList();
        setCartItem(JSON.parse(localStorage.getItem('Cart' ))|| [])
    }, []);

    return (
        <shopContext.Provider
            value={{
                listOfProducts,
                loading,
                productDetails,
                setProductDetails,
                setLoading,
                handleAddToCart,
                cartItem,
                handleRemoveCart
            }}
        >
            {children}
        </shopContext.Provider>
    );
}

export default ShoppingCartProvider;
