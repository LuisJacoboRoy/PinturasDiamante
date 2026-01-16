import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query.trim()}`);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={logo} alt="Pinturas Diamante Oaxaca Logo" style={{ height: '50px' }} /></a>
      </div>
      <nav>
        <ul>
          <li><a href="/category/vinilicas">Pinturas Vinílicas</a></li>
          <li><a href="/category/esmaltes">Esmaltes</a></li>
          <li><a href="/category/impermeabilizantes">Impermeabilizantes</a></li>
        </ul>
      </nav>
      <form className="search-bar" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="cart">
        <a href="/cart">🛒 ({totalItems})</a>
      </div>
    </header>
  );
};

export default Header;
