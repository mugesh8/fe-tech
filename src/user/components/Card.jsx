import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import axios from 'axios';
import baseurl from '../../apiService/apiService';
const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const LoggedUser = JSON.parse(localStorage.getItem('userData'));
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(baseurl+'/rim/getAllProducts');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
 
  const handleAddToCard = async (product) => {
    try {
      // API call to add product to cart
      const response = await axios.post(baseurl+'/rim/addtocart', {
        productId: product.product_id,
        userId: LoggedUser.user_id,
        quantity: 1
      });
 
      // Update the cart state if needed (optional, based on response)
      setCartItems([...cartItems, product]);
 
      // Redirect the user to the "Cart" page
      navigate('/user/pages/Cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
 
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.product_id}>
          <img src={baseurl+`/${product.first_image}`} alt={product.name} />
          <p>{product.name}</p>
          <span></span>
          <h4>Rs-{product.mrp_rate}</h4>
          <small className="brand">{product.brand_name}</small>
          <button className="cardBtn" onClick={() => handleAddToCard(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
 
export default Card;