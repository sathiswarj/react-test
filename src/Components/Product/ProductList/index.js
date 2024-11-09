import React, { useContext } from 'react'
import { shopContext } from '../../Context'
import ProductTile from '../ProductTile/Index'
const Index = () => {

  const {listOfProducts, loading}= useContext(shopContext)
  console.log(listOfProducts)

  if(loading) return <h1>Loading Please wait</h1>
  return (
    <>
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
          <div className='px-4 mx-auto sm:py-6 lg:px-8 max-w-7xl'>
            <div className='max-w-md mx-auto text-center'>
                  <h2 className='text-3xl font-extralight text-gray-950 sm:text-4xl'>Our featured Products</h2>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:mt-8 lg:grid-cols-4'>
              {
                listOfProducts &&  listOfProducts.length > 0 ?
                listOfProducts.map(singleProduct => <ProductTile singleProduct={singleProduct}/>) : <h2>No Products found</h2>
              }
            </div>
          </div>
    </section>
    </>
  )
}

export default Index 