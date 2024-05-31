import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartCountSelector } from '../store/atom/cart';

const Navbar = () => {
  const cartCount = useRecoilValue(cartCountSelector);

  return (
    <header className='bg-[#202020] p-0 h-[60px] flex items-center justify-center'>
      <nav className='container flex justify-between items-center'>
        <Link
          to='/'
          className='text-[#fff] text-[1.8rem] font-[700] font-secondary'
        >
          Fashion<span className='text-[#dd95ff]'>IO</span>
        </Link>
        <Link to='/checkout' className='text-[#fff] relative h-fit'>
          <FaCartShopping className='text-[2rem]' />
          <span className='bg-[#dd95ff] text-[#000] absolute top-[-5px] right-[-5px] w-[20px] h-[20px] text-[.6rem] font-[800] rounded-[50em] border-[2px] border-[#202020] flex items-center justify-center'>
            {cartCount ? cartCount : '0'}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
