import React, { useState } from 'react'
import '../products/ProductList.css'

const ProductList = () => {
  // Define data and pagination state at the beginning of the component
  const data = [
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrfRate: 2500, techRate: 2500, distRate: 2500 },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Search and Add Product Section */}
      <div className='searches'>
        <div className="searchInputs" id='searchBox'>
          <input type="text" className="search-input" placeholder="Search Product" />
          <div className="searchIcons">
            <i className="bi bi-search" style={{color:'#808080'}}></i>
          </div>
        </div>
        <div className='add-btn'>
          <button>
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

        {/* Pagination Section */}
        <div className="flex items-center justify-between p-4">
          <div className="text-sm text-gray-600">
            Showing 1 to {Math.min(itemsPerPage, data.length)} of {data.length} entries
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded hover:bg-gray-50 ${
                  currentPage === i + 1 ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList