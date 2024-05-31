import ProductCard from './ProductCard';
// import './ProductList.css';

function ProductList({ products, addToCart }) {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
