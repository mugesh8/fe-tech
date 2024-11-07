import React, { useState } from 'react';
import '../products/ProductList.css';

const ProductList = () => {
  const data = [
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    // ... other data
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // State to handle modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
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
          <button onClick={toggleModal}>
            <i className="bi bi-plus-circle"></i> Add Product
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-medium text-gray-600">ID</th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">Product</th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">Organization Name</th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">MRF Rate</th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">Technicians Rate</th>
                <th className="p-3 text-left text-sm font-medium text-gray-600">Distributors Rate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 text-sm text-gray-700">{item.id}</td>
                  <td className="p-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                      {item.product}
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700">{item.organization}</td>
                  <td className="p-3 text-sm text-gray-700">{item.mrfRate}</td>
                  <td className="p-3 text-sm text-gray-700">{item.techRate}</td>
                  <td className="p-3 text-sm text-gray-700">{item.distRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add product/edit product</h2>
            <form className='productPopupForm'>
              <div>
                <label>Name Product</label>
                <input type="text" placeholder="Emerson Refrigerator Compressor New" />
              </div>
              <div>
                <label>MRF Rate</label>
                <input type="text" />
              </div>
              <div>
                <label>Technicians Rate</label>
                <input type="text" />
              </div>
              <div>
                <label>Distributors Rate</label>
                <input type="text" />
              </div>
              <div>
                <label>About Product</label>
                <textarea rows="3"></textarea>
              </div>
              <div>
                <label>Upload Image</label>
                <input type="file" />
              </div>
              <button type="button" className="btn-save" onClick={toggleModal}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
