import React, { useState } from 'react';
import '../products/ProductDetailsForm.css'

const ProductDetailsForm = () => {
  const [formData, setFormData] = useState({
    nameProduct: '',
    brand: '',
    mrpRate: '',
    technicianRate: '',
    distributorRate: '',
    aboutProduct: '',
    stocks: '',
    howToUse: '',
    compression: '',
    itemDetails: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Submit form data to the server or handle it as needed
  };

  return (
    <div className="product-form-container">
      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <label>Name Product</label>
          <input
            type="text"
            name="nameProduct"
            value={formData.nameProduct}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>
        
        <div>
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter brand"
          />
        </div>

        <div>
          <label>MRP Rate</label>
          <input
            type="number"
            name="mrpRate"
            value={formData.mrpRate}
            onChange={handleChange}
            placeholder="Enter MRP rate"
          />
        </div>

        <div>
          <label>Technician Rate</label>
          <input
            type="number"
            name="technicianRate"
            value={formData.technicianRate}
            onChange={handleChange}
            placeholder="Enter technician rate"
          />
        </div>

        <div>
          <label>Distributor Rate</label>
          <input
            type="number"
            name="distributorRate"
            value={formData.distributorRate}
            onChange={handleChange}
            placeholder="Enter distributor rate"
          />
        </div>

        <div>
          <label>About Product</label>
          <textarea
            name="aboutProduct"
            value={formData.aboutProduct}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label>Stocks</label>
          <input
            type="number"
            name="stocks"
            value={formData.stocks}
            onChange={handleChange}
            placeholder="Enter available stock quantity"
          />
        </div>

        <div>
          <label>How to Use</label>
          <textarea
            name="howToUse"
            value={formData.howToUse}
            onChange={handleChange}
            placeholder="Enter usage instructions"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label>Compression</label>
          <input
            type="text"
            name="compression"
            value={formData.compression}
            onChange={handleChange}
            placeholder="Enter compression details"
          />
        </div>

        <div>
          <label>Item Details</label>
          <textarea
            name="itemDetails"
            value={formData.itemDetails}
            onChange={handleChange}
            placeholder="Enter additional item details"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductDetailsForm;
