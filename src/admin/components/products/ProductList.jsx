import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import '../products/ProductList.css';
import { Box, Upload} from 'lucide-react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
 
const ProductList = () => {
  const [products, setProducts] = useState([]);
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:5000/rim/products');
            setProducts(response.data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, []);
 
      const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Display 6 items per page
 
  // Calculate the indices for slicing the array of products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
 
  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);
 
  // Handle page change when user clicks a page number
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };
   
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentProduct, setCurrentProduct] = useState(null);
      const [imageFiles, setImageFiles] = useState([]);
   
      const toggleModal = (product = null) => {
        setCurrentProduct(product);
        setIsModalOpen(!isModalOpen);
      };
 
  const handleSubmit = async() => {
    const formData = new FormData();
   
    Object.entries(currentProduct).forEach(([key, value]) => {
        formData.append(key, value);
    });
 
    Array.from(imageFiles).forEach((file) => {
        formData.append('images', file);
    });
 
    try{
        const response = await axios.post('http://localhost:5000/rim/addProduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        alert(response.data.message);
    }
    catch(error){
        console.log(error);
    }
    toggleModal();
  };
 
  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };
 
 
  return (
    <div>
      {/* Search and Add Product Section */}
      <div className="searches">
        <div className="searchInputs" id="searchBox">
          <input type="text" className="search-input" placeholder="Search Product" />
          <div className="searchIcons">
            <i className="bi bi-search" style={{ color: '#808080' }}></i>
          </div>
        </div>
        <div className="add-btn">
          <button onClick={() => toggleModal()}>
            <i className="bi bi-plus-circle"></i> Add Product
          </button>
        </div>
      </div>
 
       {/* Products Table */}
       <table className="products-table">
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Product</th>
                <th>Organization Name</th>
                <th>MRP Rate</th>
                <th>Technicians Rate</th>
                <th>Distributors Rate</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.product_id}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="product-icon">
                        <Box color="white" size={20} />
                      </div>
                      {product.name}
                    </div>
                  </td>
                  <td>{product.organization_name}</td>
                  <td>{product.mrp_rate}</td>
                  <td>{product.technicians_rate ? product.technicians_rate : '-'}</td>
                  <td>{product.distributors_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
         
      {/* Pagination UI */}
      <div className="container d-flex mt-2" style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
      <div className="results-count text-center mb-3">
        Showing {currentProducts.length===0 ? '0' : '1'} to {currentProducts.length} of {products.length} entries
      </div>
 
      <Pagination className="justify-content-center" style={{gap:'10px'}}>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        ><MdChevronLeft/>
          </Pagination.Prev>
 
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
 
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        ><MdChevronRight/>
          </Pagination.Next>
      </Pagination>
      <div></div>
      </div>
          {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content w-75" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#ffffff', height:'90vh' }}>
            <h2>{currentProduct ? 'Edit product' : 'Add product'}</h2>
            <form className="productPopupForm">
              <div className="container d-flex flex-colum" style={{gap:'50px'}}>
              <div className='w-50'>
              <div>
                <label>Product Name</label>
                <input type="text"
                placeholder="Enter product name"
                value={currentProduct?.name || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })} />
              </div>
              <div>
                <label>MRP Rate</label>
                <input type="number"
                value={currentProduct?.mrp_rate || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, mrp_rate: e.target.value })} />
              </div>
              <div>
                <label>Technicians Rate</label>
                <input type="number"
                value={currentProduct?.technicians_rate || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, technicians_rate: e.target.value })} />
              </div>
              <div>
                <label>Distributors Rate</label>
                <input type="number"
                value={currentProduct?.distributors_rate || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, distributors_rate: e.target.value })} />
              </div>
              <div>
                <label>Brand Name</label>
                <input type="text"
                value={currentProduct?.brand_name || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, brand_name: e.target.value })} />
              </div>
              <div>
                <label>Organization Name</label>
                <input type="text"
                value={currentProduct?.organization_name || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, organization_name: e.target.value })} />
              </div>
              </div>
              <div className='w-50'>
              <div>
                <label>Product Description</label>
                <textarea rows="3"
                value={currentProduct?.product_description || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, product_description: e.target.value })}>
                </textarea>
              </div>
              <div>
                <label>Stocks</label>
                <input type="number"
                value={currentProduct?.stocks || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, stocks: e.target.value })} />
              </div>
              <div>
                <label>How to Use</label>
                <textarea rows="2"
                value={currentProduct?.how_to_use || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, how_to_use: e.target.value })}>
                </textarea>
              </div>
              <div>
                <label>Composision</label>
                <input type="text"
                value={currentProduct?.composision || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, composision: e.target.value })} />
              </div>
              <div>
                <label>Item Details</label>
                <textarea rows="2"
                value={currentProduct?.item_details || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, item_details: e.target.value })}>
                </textarea>
              </div>
              </div>
              </div>
              <div className='d-flex' style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <label>Upload Images</label>
                  <div className="image-upload-section">
                    {imageFiles.length > 0 &&
                      Array.from(imageFiles).map((file, index) => (
                        <div key={index} className="image-preview">
                          <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
                        </div>
                      ))}
                    <label className="upload-box">
                      <input type="file" multiple onChange={handleImageChange} style={{ display: 'none' }} />
                      <span className="upload-icon"><Upload /></span>
                    </label>
                  </div>
                </div>
              <button type="button" className="btn-save" onClick={handleSubmit}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
 
  );
};
 
export default ProductList;