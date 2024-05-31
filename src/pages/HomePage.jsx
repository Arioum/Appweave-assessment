import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../product-data.json';
import FilterLayout from '../layouts/FilterLayout';
import { useRecoilState } from 'recoil';
import { cartAtom } from '../store/atom/cart';

const HomePage = () => {
  const [productData, setProductData] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    type: '',
    priceRange: [0, 100],
  });

  const [cart, setCart] = useRecoilState(cartAtom);

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      if (productInCart.quantity < product.quantity) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert('Cannot add more than available quantity');
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      (!filters.gender || product.gender === filters.gender) &&
      (!filters.color || product.color === filters.color) &&
      (!filters.type || product.type === filters.type) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    return matchesSearch && matchesFilter;
  });

  return (
    <main className='container'>
      <section className='py-[2em]'>
        <FilterLayout setSearchQuery={setSearchQuery} setFilters={setFilters} />
      </section>
      {filteredProducts.length === 0 && (
        <h4 className='text-center text-[1.4rem] font-[600] text-[#aeaeae]'>
          There are no products with the current filter
        </h4>
      )}
      <section className='mb-[2em] grid gap-[1.2rem] grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 ssm:grid-cols-1'>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
