import '../pages/Cart.css';
import {useCart} from './CartContext'
import NavBar from '../components/NavBar';
import outdoorStand from '../assets/ac-outdoor-stand.png';

const Cart = ({ cartItems }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  
    return (
      
      <>
      <NavBar />
       <div className="cart-container">
        <h2>Your Cart : {cartItems.length} items</h2>
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Details</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-details">
                    <img src={outdoorStand} alt={item.title} className="product-images" />
                    <div className="product-info">
                      <p className="product-name">{item.title}</p>
                      <p className="product-category">{item.brand}</p>
                    </div>
                  </td>
                  <td className="total-price">Rs {item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Sub total <span>{cartItems.length} items</span></p>
            <p>Total MRP <span>Rs {totalAmount}</span></p>
            <p>Total Cart Value <span>Rs {totalAmount}</span></p>
            <h4>Total Amount <span className="total-amount">Rs {totalAmount}</span></h4>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
      </>
    );
  };
  
export default Cart;