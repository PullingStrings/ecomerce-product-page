// components/ProductDetails.tsx

const ProductDetails = () => {
  return (
    <div className='w-full md:w-1/2 p-4'>
      <h1 className='text-xl font-bold text-gray-900'>Product Name</h1>
      <p className='text-gray-700 mt-2'>
        A brief description of the product goes here. It can cover any important
        features or details that you want the customer to know about.
      </p>
      <div className='mt-4'>
        <span className='text-lg font-semibold text-gray-900'>$Price</span>
      </div>
      <div className='mt-4'>
        <label
          htmlFor='quantity'
          className='block text-sm font-medium text-gray-700'
        >
          Quantity
        </label>
        <input
          type='number'
          id='quantity'
          name='quantity'
          min='1'
          defaultValue='1'
          className='mt-1 block w-20 p-2 border border-gray-300 rounded-md'
        />
      </div>
      <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails
