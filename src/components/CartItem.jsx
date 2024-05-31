import { MdOutlineDelete } from 'react-icons/md';

function CartItem({ item, updateCartItem, removeCartItem }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateCartItem(item.id, newQuantity);
    } else {
      removeCartItem(item.id);
    }
  };

  return (
    <article className='flex gap-[2em] items-center justify-between sm:gap-[1em]'>
      <div className='flex gap-[1.4em] justify-between items-center sm:gap-[.8em]'>
        <div className='w-[80px] h-[80px] rounded-[5px] overflow-hidden border-[2px] sm:w-[70px] sm:h-[70px]'>
          <img className='max-w-[100%]' src={item.image} alt={item.name} />
        </div>
        <div>
          <h3 className='font-[700] text-[1.2rem] sm:text-[1rem]'>
            {item.name}
          </h3>
          <p className='text-[rem]'>${item.price}</p>
          <label htmlFor='quantity'>Quantity: </label>
          <input
            id='quantity'
            type='number'
            value={item.quantity}
            onChange={handleQuantityChange}
            min='1'
            max={item.stock}
            className='border-[1px] border-[#aeaeae] rounded-[5px] w-[100px] pl-[2.5em] sm:w-[50px] sm:pl-[1em]'
          />
        </div>
      </div>
      <button
        className='text-[#fff] bg-[#202020] px-[.6em] rounded-[5px] h-[50px]'
        onClick={() => removeCartItem(item.id)}
      >
        <MdOutlineDelete className='text-[2rem]' />
      </button>
    </article>
  );
}

export default CartItem;
