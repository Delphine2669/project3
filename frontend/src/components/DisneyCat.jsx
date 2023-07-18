import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisneyCat.scss";

export default function DisneyCat() {
  const [categories, setCategories] = useState([]);
  const [videosByCategory, setVideosByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/videos/category`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchVideosByCategory = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/videos/category/${category}`
      );
      setVideosByCategory((prevState) => ({
        ...prevState,
        [category]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching videos by category:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleKeyDown = (e, category) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCategoryClick(category);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchCategories();
      if (selectedCategory) {
        await fetchVideosByCategory(selectedCategory);
      }
    }
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="DisneyCatBox">
      {categories.map((category) => (
        <div key={category}>
          <button
            type="button"
            className="category-button"
            onClick={() => handleCategoryClick(category)}
            onKeyDown={(e) => handleKeyDown(e, category)}
          >
            {category}
          </button>
          <div className="video-list">
            {selectedCategory === category &&
              videosByCategory[category]?.map((video) => (
                <div className="item" key={video.id}>
                  <div className="item-border">
                    <img alt="" className="item-image" src={video.data} />
                    <img
                      alt=""
                      className="item-image hover-image"
                      src={video.data}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
