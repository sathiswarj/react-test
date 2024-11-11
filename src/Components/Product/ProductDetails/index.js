import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../../Context';

const Index = () => {
  const { id } = useParams();
  const { productDetails, setProductDetails, loading, setLoading, handleAddToCart, cartItem } = useContext(shopContext);

  async function fetchProductDetails(productId) {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const result = await response.json();
      console.log(result);
      if (result) {
        setProductDetails(result);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <h1 className='text-center text-xl font-semibold'>Loading, please wait...</h1>
      ) : productDetails && (  
        <div className='p-6 lg:max-w-7xl mx-auto'>
          <div className='grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6'>

            <div className='lg:col-span-3 flex flex-col items-center'>
              <div className='px-4 py-10 rounded-xl shadow-lg relative'>
                <img
                  className='w-4/5 rounded object-cover'
                  src={productDetails?.thumbnail}
                  alt={productDetails?.title}
                />
              </div>

              <div className='mt-6 flex flex-wrap justify-center gap-4  mx-auto'>
                {productDetails?.images?.map((imageItem, index) => (
                  <div key={index} className='rounded-lg p-4 shadow-md'>
                    <img
                      src={imageItem}
                      alt={`Secondary ${index}`}
                      className='w-24 h-24 rounded cursor-pointer object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='lg:col-span-2'>
              <h2 className='text-2xl font-extrabold text-[#333333]'>
                {productDetails?.title}
              </h2>
              <div className='flex flex-wrap gap-4 mt-4'>
                <p className='text-xl font-bold'>${productDetails?.price}</p>
              </div>
              <div>
                <button
                 className=' disabled:opacity-60 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded ' 
                 disabled={cartItem.findIndex((item) => item.id === productDetails.id) > -1}
                 onClick={() => handleAddToCart(productDetails)}
                >
                  {cartItem.findIndex((item) => item.id === productDetails.id) > -1 ? 'Added in cart' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )  }
    </>
  );
};

export default Index;
