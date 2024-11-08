import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import '../products/ProductView.css';
import compressor from '../../assets/compressor-img.png'; // Placeholder image if `image_url` is unavailable

const ProductView = () => {
  // Sample product data
  const products = [
    {
      id: "comp001",
      name: "Air Compressor 2HP",
      mrp_rate: 12999,
      brand_name: "PowerTech",
      image_url: "/images/compressor1.jpg"
    },
    {
      id: "comp002",
      name: "Portable Air Compressor",
      mrp_rate: 8499,
      brand_name: "AirMaster",
      image_url: "/images/compressor2.jpg"
    },
    {
      id: "comp003",
      name: "Industrial Compressor 5HP",
      mrp_rate: 24999,
      brand_name: "IndustrialPro",
      image_url: "/images/compressor3.jpg"
    },
    {
      id: "comp004",
      name: "Silent Air Compressor",
      mrp_rate: 15999,
      brand_name: "QuietForce",
      image_url: "/images/compressor4.jpg"
    },
    {
      id: "comp005",
      name: "Oil-Free Air Compressor",
      mrp_rate: 18999,
      brand_name: "CleanAir",
      image_url: "/images/compressor5.jpg"
    },
    {
        id: "comp005",
        name: "Oil-Free Air Compressor",
        mrp_rate: 18999,
        brand_name: "CleanAir",
        image_url: "/images/compressor5.jpg"
      },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="productViewContainer">
      {products.map((product) => (
        <div key={product.id} className="productViewCard">
          <img src={compressor} alt={product.name} />
          <p>{product.name}</p>
          <div className='line'><span></span></div>
          <div className='productMrp'><h4 className='productMrp'>Rs-{product.mrp_rate}</h4></div>
          <div className='brandName'><small className="brandName">{product.brand_name}</small></div>
          <div className='btnShare'>
            <div>
            <button className="productViewCardBtn" onClick={() => handleAddToCart(product)}>
            View Details 
          </button>
            </div>
            <div className='shareIcon'><Share2 /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
