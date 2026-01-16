import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export interface Product {
  id: number;
  name: string;
  image: string;
  productPage: string;
  price: number;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={product.productPage} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
    </Link>
  );
};

export default ProductCard;
