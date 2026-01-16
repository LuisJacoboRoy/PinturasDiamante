import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard, { Product } from '../components/ProductCard';
import { getProductsByCategory } from '../services/productService';
import './HomePage.css'; // Re-using homepage styles for the product list

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName).then(data => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [categoryName]);

  if (loading) {
    return <div>Cargando productos de la categoría: {categoryName}...</div>;
  }

  return (
    <div className="category-page">
      <h2>Categoría: {categoryName}</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
