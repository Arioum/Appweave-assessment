function ProductCard({ product, addToCart }) {
  return (
    <article className='pmin-w-[180px] max-w-[250px] lg:min-w-[140px] md:min-w-[140px] ssm:max-w-[100%]'>
      <div className='h-[300px] rounded-[20px] overflow-hidden lg:h-[250px] md:h-[200px] ssm:h-[250px]'>
        <img className='max-w-[100%]' src={product.image} alt={product.name} />
      </div>
      <h2 className='font-[700] text-[1.2rem] lg:text-[1rem] md:text-[.8rem]'>
        {product.name}
      </h2>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-[.8rem] font-[600] text-[#727272] lg:text-[.6rem] md:text-[.5rem]'>
            Color: {product.color}
          </p>
          <p className='text-[.8rem] font-[600] text-[#727272] lg:text-[.6rem] md:text-[.5rem]'>
            Type: {product.type}
          </p>
        </div>
        <p className='text-[1.4rem] font-[600] lg:text-[1.2rem] md:text-[1rem]'>
          ${product.price}
        </p>
      </div>

      {product.quantity === 0 ? (
        <button
          disabled
          className='bg-[#e75757] text-[#fff] w-[100%] rounded-[5px] p-[.6em] font-[500] mt-[.6em] lg:text-[.8rem] md:text-[.7rem]'
        >
          Out of stock
        </button>
      ) : (
        <button
          className='bg-[#202020] text-[#fff] w-[100%] rounded-[5px] p-[.6em] font-[500] mt-[.6em] lg:text-[.8rem] md:text-[.7rem]'
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </article>
  );
}

export default ProductCard;
