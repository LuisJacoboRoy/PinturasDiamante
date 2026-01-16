import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/ProductCard';
import { getProductById } from '../services/productService';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (productId) {
      getProductById(parseInt(productId, 10)).then(data => {
        setProduct(data || null);
        setLoading(false);
      });
    }
  }, [productId]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="product-page">
      <div className="product-image-gallery">
        <img src={product.image} alt={product.name} className="main-product-image" />
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-btn-large" onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductPage;