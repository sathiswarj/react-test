export const productList = [
    {
        id: 1,
        title: 'Product 1'
    },
    {
        id: 2,
        title: 'Product 2'
    },
    {
        id: 3,
        title: 'Product 3'
    },
    {
        id: 4,
        title: 'Product 4'
    },
    {
        id: 5,
        title: 'Product 5'
    }
]

export const fetchProductsList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return productList
}

export const addNewProduct = async (productName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newId = productList.length > 0 ? Math.max(...productList.map(p => p.id)) + 1 : 1
    const newProduct = {
        id: newId,
        title: productName
    }
    productList.push(newProduct)
    return newProduct
}
