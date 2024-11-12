import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import "../products/Distributors.css";
import { Box, Upload, Eye, PencilLine, Trash2 } from "lucide-react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import baseurl from "../../../apiService/apiService";

const Distributors = () => {
  const [distributors, setDistributors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Display 6 items per page

  useEffect(() => {
    fetchDistributors();
  }, []);

  // Fetch distributors from API
  const fetchDistributors = async () => {
    try {
      const response = await axios.get(baseurl+"/rim/getAllDistributors");
      setDistributors(response.data.distributors || []); // Set to an empty array if undefined
    } catch (error) {
      console.error("Error fetching distributors:", error);
      setDistributors([]); // Set to an empty array in case of an error
    }
  };

  // Calculate indices for pagination
  const indexOfLastDistributor = currentPage * itemsPerPage;
  const indexOfFirstDistributor = indexOfLastDistributor - itemsPerPage;
  const currentDistributors = (distributors || []).slice(indexOfFirstDistributor,
     indexOfLastDistributor);

  const totalPages = Math.ceil(distributors.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDistributor, setCurrentDistributor] = useState({
    companyname: "",
    location: "",
    gstnumber: "",
    creditlimit: "",
    contact_person_name: "",
    phoneno: "",
    emailid: "",
  });
  const [imageFiles, setImageFiles] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form submission to add a new distributor
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(currentDistributor).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Array.from(imageFiles).forEach((file) => {
      formData.append("image", file);
    });

    try {
      const response = await axios.post(
        baseurl + "/rim/addDistributor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      fetchDistributors(); // Refresh distributors list after adding
      setCurrentDistributor({
        companyname: "",
        location: "",
        gstnumber: "",
        creditlimit: "",
        contact_person_name: "",
        phoneno: "",
        emailid: "",
      });
      setImageFiles([]);
    } catch (error) {
      console.log(error);
    }
    toggleModal();
  };

  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentDistributor((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Search and Add Distributor Section */}
      <div className="searches">
        <div className="searchInputs" id="searchBox">
          <input
            type="text"
            className="search-input"
            placeholder="Search Distributor"
          />
          <div className="searchIcons">
            <i className="bi bi-search" style={{ color: "#808080" }}></i>
          </div>
        </div>
        <div className="add-btn">
          <button onClick={toggleModal}>
            <i className="bi bi-plus-circle"></i> Add Distributor
          </button>
        </div>
      </div>

      <div className="orderDetails">
        <ul>
          <a href="">
            <li>All Distributors</li>
          </a>
          <a href="">
            <li>Archive</li>
          </a>
          <a href="">
            <li>New Distributors</li>
          </a>
        </ul>
      </div>

      {/* Distributors Table */}
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
          {currentDistributors.map((distributor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{distributor.companyname}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {distributor.contact_person_name}
                </div>
              </td>
              <td>{distributor.phoneno || "-"}</td>
              <td className="status">
                <Eye style={{ color: "#091975", fontSize: "25px", cursor: "pointer"}} />
                <PencilLine style={{ color: "#699BF7", cursor: 'pointer' }} />
                <Trash2 style={{ color: "#F24E1E", cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination UI */}
      <div className="container d-flex mt-2" style={{ justifyContent: "space-between" }}>
        <div className="results-count text-center mb-3">
          Showing {currentDistributors.length === 0 ? "0" : "1"} to {currentDistributors.length} of {distributors.length} entries
        </div>

        <Pagination className="justify-content-center" style={{ gap: "10px" }}>
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <MdChevronLeft />
          </Pagination.Prev>

          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index + 1} active={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <MdChevronRight />
          </Pagination.Next>
        </Pagination>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content w-75 distributor-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Distributor Registration</h2>
            <form onSubmit={handleSubmit} className="distributor-registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" name="companyname" placeholder="Enter company name" onChange={handleInputChange} value={currentDistributor.companyname} />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" name="location" placeholder="Enter location" onChange={handleInputChange} value={currentDistributor.location} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label>GST Number</label>
                  <input type="text" name="gstnumber" placeholder="Enter GST number" onChange={handleInputChange} value={currentDistributor.gstnumber} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label>Credit Limit</label>
                  <input type="text" name="creditlimit" placeholder="Enter credit limit" onChange={handleInputChange} value={currentDistributor.creditlimit} />
                </div>
              </div>
              <div className="form-row d-flex flex-column">
                <p>Who can we contact for this conversation?</p>
                <div className="d-flex flex-row gap-3">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="contact_person_name" placeholder="Enter name" onChange={handleInputChange} value={currentDistributor.contact_person_name} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phoneno" placeholder="Enter phone number" onChange={handleInputChange} value={currentDistributor.phoneno} />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label>Email Address</label>
                  <input type="email" name="emailid" placeholder="Enter email address" onChange={handleInputChange} value={currentDistributor.emailid} />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <label>Upload Images</label>
                <div className="image-upload-section">
                  {imageFiles.length > 0 &&
                    Array.from(imageFiles).map((file, index) => (
                      <div key={index} className="image-preview">
                        <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
                      </div>
                    ))}
                  <label className="upload-box">
                    <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
                    <span className="upload-icon"><Upload /></span>
                  </label>
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
