import { useRecoilState } from 'recoil';
import { cartAtom } from '../store/atom/cart';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [cart, setCart] = useRecoilState(cartAtom);

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
            <Link to='/' className='text-[1.2rem] font-[600]'>Go back to shop</Link>
          </>
        ) : (
          <>
            <hr />
            <div className='flex justify-between text-[1.6rem] font-[700]'>
              <span>Total: </span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
