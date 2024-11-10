import React, { useEffect, useState } from 'react';
import '../pages/Cart.css';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Cart = () => {
  const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const LoggedUser = JSON.parse(localStorage.getItem('userData'));
    const userId = LoggedUser?.user_id;
 
    useEffect(() => {
        if (userId) {
            const fetchCartData = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/rim/user/${userId}`);
                    const items = response.data.cartItems.map(item => ({
                        ...item,
                        quantity: 1 // Initialize quantity for each item
                    }));
                    setCartItems(items);
                    calculateTotal(items);
                } catch (error) {
                    console.error('Error fetching cart data:', error);
                }
            };
            fetchCartData();
        }
    }, [userId]);
 
    const calculateTotal = (items) => {
        const total = items.reduce((total, item) => total + Number(item.mrp_rate || 0) * item.quantity, 0);
        setTotalAmount(total);
    };
 
    const handleQuantityChange = (productId, increment) => {
        const updatedItems = cartItems.map(item => {
            if (item.product_id === productId) {
                const newQuantity = increment ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };
    const handlecheckout =()=>{
      navigate('/user/checkout')
    }
 
    return (
<>
<NavBar />
<div className="cart-container">
<h2>Your Cart: {cartItems.length} items</h2>
<div className="cart-content">
<table className="cart-table">
<thead>
<tr>
<th>Product Details</th>
<th>Price</th>
<th>Quantity</th>
<th>Total Price</th>
</tr>
</thead>
<tbody>
                {cartItems.map((item) => (
<tr key={item.product_id}>
<td className="product-details">
<img src={`http://localhost:5000/${item.first_image}`} alt={item.name} className="product-images" />
<div className="product-info">
<p className="product-name">{item.name}</p>
<p className="product-category">{item.brand_name}</p>
</div>
</td>
<td>Rs {Number(item.mrp_rate || 0).toFixed(2)}</td>
<td className="quantity-controls">
<div className='btnControl'>
<button onClick={() => handleQuantityChange(item.product_id, false)}>-</button>
<span>{item.quantity}</span>
<button onClick={() => handleQuantityChange(item.product_id, true)}>+</button>
</div>
</td>
<td className="total-price">
                      Rs {(Number(item.mrp_rate || 0) * item.quantity).toFixed(2)}
</td>
</tr>
                ))}
</tbody>
</table>
<div className="cart-summary">
<h3>Order Summary</h3>
<p>Sub total <span>{cartItems.length} items</span></p>
<p>Total MRP <span>Rs {totalAmount.toFixed(2)}</span></p>
<h4>Total Amount <span className="total-amount">Rs {totalAmount.toFixed(2)}</span></h4>
<button className="checkout-button" onClick={handlecheckout}>Checkout</button>
</div>
</div>
</div>
</>
    );
};
 
export default Cart;