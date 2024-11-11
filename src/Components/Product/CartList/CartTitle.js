import { useContext } from 'react'
import { shopContext } from '../../Context';

const CartTitle = ({ singleItem }) => {
    const { handleRemoveCart, handleAddToCart } = useContext(shopContext)
    return (
        <>
            <div className='grid grid-cols-3 items-start gap-5'>
                <div className='col-span-2 flex items-start gap-4'>
                    <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
                        <img
                            src={singleItem?.thumbnail}
                            className='w-full h-full object-contain'
                            alt="Product alter"
                        />
                    </div>
                    <div>
                        <h3 className='text-base font-bold text-gray-900'>{singleItem?.title}</h3>
                        <button
                            className="text-sm px-4 py-3 bg-black text-white font-extrabold"
                            onClick={() => handleRemoveCart(singleItem, true)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div className='ml-auto'>
                    <h3 className='text-lg font-bold text-gray-900'>${singleItem?.totalPrice.toFixed()}</h3>
                    <p className='mt-2 mb-3 font-bold text-[16px]'>Quantity : {singleItem?.quantity}</p>

                    <div className="mt-3 flex items-center space-x-2">
                        <button
                            className="disabled:opacity-65 border border-[#000] px-3 py-1 font-bold mx-1"
                            onClick={() => handleRemoveCart(singleItem, false)}
                            disabled={singleItem?.quantity === 1}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <button
                            className="border border-[#000] px-3 py-1 font-bold"
                            onClick={() => handleAddToCart(singleItem)}
                        >
                            +
                        </button>
                    </div>

                </div>
            </div>
            <hr className='border-gray-500' />
        </>
    )
}

export default CartTitle