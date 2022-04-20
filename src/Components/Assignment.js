import React from "react";
import { useEffect, useState } from "react";
import "../Assignment.css";
import axios from "axios";
import Modal from "./Modal";

function Assignment() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(false);

  // server call before the app renders and re-renders everytime chosen states change
  useEffect(() => {
    axios.get(`http://localhost:8080/${category}/${page}`).then((res) => {
      const response = res.data;

      setData(response);
      console.log(response);
    });
  }, [category, page]);
  // handle the previous button
  const handlePrevious = () => {
    if (page === 1) {
      alert("No previous pages");
    } else {
      setPage((currentPage) => currentPage - 1);
    }
  };
  // handle the nnext button
  const handleNext = () => {
    if (page === 3) {
      alert("No next pages");
    } else {
      setPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div className="body">
      <div className="header">
        <button className="previous" onClick={handlePrevious}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
        <select
          className="type"
          onChange={(e) => {
            const selectedCategory = e.target.value;
            setCategory(selectedCategory);
          }}
        >
          <option value="">Type</option>
          <option value="animals">Animals</option>
          <option value="sports">Sports</option>
          <option value="work">Work</option>
          <option value="flowers">Flowers</option>
          <option value="beach">Beach</option>
          <option value="landscape">Landscape</option>
          <option value="reutlingen">Reutlingen</option>
          <option value="ballet">Ballet</option>
          <option value="dogs">Dogs</option>
          <option value="egypt">Egypt</option>
          <option value="golden-retriever">Golden-Retriever</option>
        </select>
      </div>
      <div className="headline">
        <h2>
          Pictures Category is{" "}
          {category === "" ? "(Pick a type)" : category.toLocaleUpperCase()}
        </h2>
      </div>

      <div className="images-wrapper">
        {data.map((item) => (
          <div
            onClick={() => setSelectedImage(item)}
            key={item.id}
            className="images"
          >
            <img src={item.image} alt="images"></img>
          </div>
        ))}
      </div>
      {selectedImage ? (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      ) : null}
    </div>
  );
}

export default Assignment;
