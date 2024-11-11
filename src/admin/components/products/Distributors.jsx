import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import '../products/Distributors.css';
import { Box, Upload, Eye, PencilLine, Trash2} from 'lucide-react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
 
const Distributors = () => {
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

      <div className='orderDetails'>
        <ul>
            <a href=""><li>All Distributors</li></a>
            <a href=""><li>Archive</li></a>
            <a href=""><li>New Distributors</li></a>
        </ul>
      </div>
 
       {/* Products Table */}
       <table className="products-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Organization Name</th>
                <th>Contact Person</th>
                <th>Contact Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.organization_name}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="product-icon">
                        <Box color="white" size={20} />
                      </div>
                      {product.name}
                    </div>
                  </td>
                  <td>{product.technicians_rate ? product.technicians_rate : '-'}</td>
                  <td className='status'>{}<i class="bi bi-eye-fill" style={{color: '#091975', fontSize: '25px'}}></i> <PencilLine style={{color: '#699BF7'}} /> <Trash2 style={{color: '#F24E1E'}}/></td>
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
        {/* Modal Component */}
{isModalOpen && (
  <div className="modal-overlay" onClick={toggleModal}>
    <div className="modal-content distributor-modal" onClick={(e) => e.stopPropagation()}>
      <h2>Distributors Registration</h2>
      <form className="distributor-registration-form">
        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Enter location" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>GST Number</label>
            <input type="text" placeholder="Enter GST number" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Credit Limit</label>
            <input type="text" placeholder="Enter credit limit" />
          </div>
        </div>
        <div className="form-row">
          <p>Who can we contact for this conversation?</p>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
)}

    </div>
 
  );
};
 
export default Distributors;