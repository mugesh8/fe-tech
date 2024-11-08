import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../products/ProductViewDetails.css';
import compressor from '../../assets/compressor-img.png';

const ProductViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/rim/productDetail/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="productDetailsContainer">
        <section className="section-1">
          <div className="productImageSection">
            <img src={compressor} alt="Main Product" className="mainImage" />
            <div className="thumbnailGallery">
              {/* Repeat thumbnail images */}
              <img src={compressor} alt="Thumbnail 1" className="thumbnail" />
              <img src={compressor} alt="Thumbnail 2" className="thumbnail" />
              <img src={compressor} alt="Thumbnail 3" className="thumbnail" />
            </div>
          </div>

          <div className="productStatsSection">
            <div className="stockInfo">
              <p><strong>Stock</strong></p>
              <p>{product.stock} / Pack</p>
            </div>
            <div className="salesInfo">
              <p><strong>Sales</strong></p>
              <p>{product.sales} / Pack</p>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="productInfoSection">
            <h2>{product.name}</h2>
            <h3 className="productPrice">Rs {product.price}</h3>
            <p><strong>ID Product:</strong> {product.id}</p>

            <div className="aboutProduct"><h4>About Product</h4></div>
            <p>{product.description}</p>

            <div className="additionalInfo"><h4>Additional Information</h4></div>
            <p><strong>Items Detail:</strong> {product.itemsDetail}</p>
            <p><strong>How to use:</strong> {product.howToUse}</p>
            <p><strong>Composition:</strong> {product.composition}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductViewDetails;