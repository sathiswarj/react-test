import React from 'react';
import {useNavigate} from 'react-router-dom'
const Index = ({ singleProduct }) => {
  const navigate = useNavigate()
  const handleNavigate = (getProductId) =>{
    console.log(getProductId)
   navigate(`/product-details/${getProductId}`)
  }
  
  return (
    <div className='relative group border border-cyan-700 p-6 cursor-pointer'>
      <div className='overflow-hidden aspect-square'>
        <img
          src={singleProduct?.thumbnail}
          alt={singleProduct?.title}
          className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-125'
        />
      </div>
      <div className='flex items-start justify-between mt-4 space-x-4'>
        <div className='font-bold text-gray-900 text-xs sm:text-sm md:text-base'>
          <p className='w-[100px] sm:w-[150px] md:w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>
            {singleProduct?.title}
          </p>
        </div>
        <div className='text-right'>
             <p className='text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]'>  ${singleProduct?.price}</p>
        </div>
      </div>
      <button className='px-5 mt-5 w-full py-2 rounded-one bg-black text-white font-bold text-large' onClick={()=>handleNavigate(singleProduct?.id)}>
        View details
        </button>
    </div>
  );
};

export default Index;
