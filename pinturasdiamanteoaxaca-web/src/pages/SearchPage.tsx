import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard, { Product } from '../components/ProductCard';
import { getProducts } from '../services/productService';
import './HomePage.css'; // Reuse homepage styles for the product list

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get('q') || '';

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (query && products.length > 0) {
      const lowercasedQuery = query.toLowerCase();
      const results = products.filter(product => 
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="home-page">
      <h2>Resultados de búsqueda para: "{query}"</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
