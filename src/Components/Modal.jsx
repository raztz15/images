import React from "react";
import "../Modal.css";

// function to add commas for numbers above 999
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Modal({ setSelectedImage, selectedImage }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h1>Image's ranks</h1>
        <h4>Downloads: {numberWithCommas(selectedImage.downloads)}</h4>
        <h4>Views: {numberWithCommas(selectedImage.views)}</h4>
        <h4>Collections: {numberWithCommas(selectedImage.collections)}</h4>
        <h4>Likes: {numberWithCommas(selectedImage.likes)}</h4>
        <h4>Comments: {numberWithCommas(selectedImage.comments)}</h4>
        <span onClick={() => setSelectedImage(undefined)} className="close">
          &times;
        </span>
      </div>
    </div>
  );
}

export default Modal;
