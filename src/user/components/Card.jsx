import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import axios from 'axios';

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rim/getAllProducts');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCard = (product) => {
    // Add product to cart
    setCartItems([...cartItems, product]);

    // Redirect the user to the new "Cart" component
    navigate('/user/pages/Cart');
  };

  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.product_id}>
          <img src={`http://localhost:5000/${product.first_image}`} alt={product.name} />
          <p>{product.name}</p>
          <span></span>
          <h4>Rs-{product.mrp_rate}</h4>
          <small className="brand">{product.brand_name}</small>
          <button className="card" onClick={() => handleAddToCard(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;