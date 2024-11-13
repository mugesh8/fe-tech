import React, { useState } from "react";
import "../pages/FeedViews.css";
import compressor from "../assets/compressor-img.png";
import NavBar from "../components/NavBar";

const FeedsViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <NavBar />
      <div className="search">
        <div className="searchInput" id="searchBox">
          <input type="text" className="search-input" placeholder="Search" />
          <div className="search-icons">
            <i className="bi bi-x-lg"></i>
            <div className="divider"></div>
            <i className="bi bi-mic-fill"></i>
            <i className="bi bi-search"></i>
          </div>
        </div>
        <div className="feed-btn">
          <button onClick={toggleModal}>
            <i className="bi bi-box-seam"></i> Add Post
          </button>
        </div>
      </div>

      <div className="product-card-container">
    <div className="row no-gutters align-items-center">
      {/* Image Section */}
      <div className="col-md-4 product-image-container">
        <img src={compressor} alt="Product" className="product-image" />
      </div>
      
      {/* Details Section */}
      <div className="col-md-8 product-details-container ">
        <div className="product-details row align-items-center justify-content-between mt-3">
          <div className="details-row">
            <span className="label">Product Name :</span>
            <span className="value">Emerson Refrigerator Compressor New</span>
          </div>
          <div className="details-row">
            <span className="label">Needed Quality :</span>
            <span className="value">2 Quality</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors :</span>
            <span className="value">Tools Mart</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors Location :</span>
            <span className="value">Chennai</span>
          </div>
        </div>
        
        {/* Close Date and Button Section */}
        <div className="row align-items-center justify-content-between mt-3">
          <div className="col">
            <p className="close-date">Close Date: 24-Sep-2024</p>
          </div>
          <div className="col-auto">
            <button className=" take-btn">Take</button>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>&times;</span>
            <h4 className="sideHeading mb-4">
              Tell us what you need, and we'll help you get quotes
            </h4>
            <form>
              <div className="row mb-3 align-items-center">
                <label className="col-sm-3 col-form-label">Product Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-controls"
                    value="AC Outdoor Stand"
                    readOnly
                  />
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <label className="col-sm-3 col-form-label">Quantity</label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <input type="number" className="form-cont" placeholder="Enter Quantity" />
                    <span className="input-group-text">Piece</span>
                  </div>
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <label className="col-sm-3 col-form-label">Distributors Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-controls" placeholder="Enter Your Name" />
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <label className="col-sm-3 col-form-label">Distributors Location</label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <input type="text" className="form-cont" />
                    <span className="input-group-text">Piece</span>
                  </div>
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <label className="col-sm-3 col-form-label"> Distributors Phone Number</label>
                <div className="col-sm-9">
                  <input type="tel" className="form-controls" placeholder="Enter Your Mobile Number" />
                </div>
              </div>
              <button type="submit" className="btn submitReq">Submit Requirement</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedsViews;
