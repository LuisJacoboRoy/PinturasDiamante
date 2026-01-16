import { useEffect, useState } from 'react';
import ProductCard, { Product } from '../components/ProductCard';
import { getProducts } from '../services/productService';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="home-page">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
