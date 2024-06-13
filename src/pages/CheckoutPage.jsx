import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { cartAtom } from '../store/atom/cart';
import CartItem from '../components/CartItem';

const CheckoutPage = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [finalTotal, setFinalTotal] = useState(null);
  const inputField = useRef(null);

  const coupons = [
    { code: '10OFF', type: 'percent', value: 10 },
    { code: '50OFF', type: 'amount', value: 50 },
  ];

  const calculateDiscount = () => {
    const discount = coupons.find(
      (item) => item.code === inputField.current.value
    );

    if (discount) {
      if (discount.type === 'percent') {
        const total = parseFloat(totalAmount * 0.9).toFixed(2);
        setFinalTotal(total);
      } else {
        const total = parseFloat(totalAmount - 50).toFixed(2);
        if (totalAmount > 0) {
          setFinalTotal(total);
        } else {
          setFinalTotal(totalAmount);
        }
      }
    } else {
      setFinalTotal(totalAmount);
    }
  };

  const resetTotal = () => {
    inputField.current.value = '';
    setFinalTotal(null);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateCartItem = (productId, quantity) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeCartItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <main className='max-w-[400px] mx-auto px-[1em]'>
      <section className='py-[2em]'>
        <h2 className='text-[2rem] font-[700]'>Your Cart</h2>
      </section>
      <section className='flex flex-col gap-[2em]'>
        {cart?.map((item, key) => (
          <CartItem
            key={key}
            item={item}
            updateCartItem={updateCartItem}
            removeCartItem={removeCartItem}
          />
        ))}
        {cart.length === 0 ? (
          <>
            <p>Your cart is empty</p>
            <Link to='/' className='text-[1.2rem] font-[600]'>
              Go back to shop
            </Link>
          </>
        ) : (
          <>
            <hr />
            <div className='flex gap-[10px]'>
              <input
                type='text'
                ref={inputField}
                className='flex-1 border rounded-[10px] px-[10px]'
              />
              <button
                onClick={finalTotal ? resetTotal : calculateDiscount}
                className='bg-[#202020] text-[#fff] p-[10px_20px] rounded-[8px]'
              >
                {finalTotal ? 'Remove' : 'Apply'}
              </button>
            </div>
            <div className='flex justify-between text-[1.6rem] font-[700]'>
              <span>Total: </span>
              <span>${finalTotal || totalAmount.toFixed(2)}</span>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
