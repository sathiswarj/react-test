//TAN STACK

import { useState } from 'react'
import { addNewProduct, fetchProductsList } from './index'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const ApiIndex = () => {
    const [productTitle, setProductTitle] = useState("")
    const getQueryClient = useQueryClient()

    const { data: productList, isLoading } = useQuery({
        queryKey: ["productList"],
        queryFn: () => fetchProductsList()
    })

    const { mutateAsync: handleAddProduct } = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries([productList])
        }
    })

    async function handleNewAddProduct() {
        await handleAddProduct(productTitle)
        setProductTitle("")
    }
    if (isLoading) return <h1>Loading Please wait</h1>

    return (
        <>
            <input
                type='text'
                name='name'
                placeholder='Enter the product title'
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)} />
            <button type='submit' onClick={handleNewAddProduct}>Add</button>
            <ul>
                {
                    productList.length > 0 ?
                        productList.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        )) : "No products found"
                }
            </ul>  
        </>
    )
}

export default ApiIndex