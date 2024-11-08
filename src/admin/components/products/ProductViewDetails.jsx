import React from 'react'
import '../products/ProductViewDetails.css'
import compressor from '../../assets/compressor-img.png'

const ProductViewDetails = () => {
  return (
    <>
      <div className="productDetailsContainer">
       <section className='section-1'>
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
            <p>245 / Pack</p>
          </div>
          <div className="salesInfo">
            <p><strong>Sales</strong></p>
            <p>12.345 / Pack</p>
          </div>
        </div>
       </section>
  
        <section className='section-2'>
        <div className="productInfoSection">
          <h2>Emerson Refrigerator Compressor New</h2>
          <h3 className="productPrice">Rs 1800.00</h3>
          <p><strong>ID Product:</strong> PA89</p>
          
          <div className='aboutProduct'><h4>About Product</h4></div>
          <p>Lorem ipsum dolor sit amet consectetur. Eget gravida nisl faucibus egestas...</p>
          
          <div className='additionalInfo'><h4>Additional Information</h4></div>
          <p><strong>Items Detail:</strong> 10 * 23 cm</p>
          <p><strong>How to use:</strong> Lorem ipsum dolor sit amet consectetur...</p>
          <p><strong>Composition:</strong> Lorem ipsum dolor sit amet consectetur...</p>
        </div>
        </section>
  
        
      </div>    
    </>
  )
}

export default ProductViewDetails