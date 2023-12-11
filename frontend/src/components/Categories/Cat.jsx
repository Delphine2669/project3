import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import "./Cat.scss";

export default function Cat() {
  const { isAuthenticated } = useAuth();
  const [categories, setCategories] = useState([]);
  const [videosByCategory, setVideosByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/categories`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchVideosByCategory = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`
      );
      setVideosByCategory((prevState) => ({
        ...prevState,
        [category.id]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching videos by category:", error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategoryA = categories.find(
      (category) => category.id === parseInt(selectedCategoryId, 10)
    );
    setSelectedCategory(selectedCategoryA);
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
    <div className="CatBox">
      {isAuthenticated && (
        <select
          className="videos-category-select"
          onChange={handleCategoryChange}
          value={selectedCategory?.id || ""}
        >
          <option value="">Find your videos by category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      )}
      <div className="video-list">
        {selectedCategory && videosByCategory[selectedCategory.id] && (
          <div className="video-list">
            {videosByCategory[selectedCategory.id].map((video) => (
              <div className="video-cat-container" key={video.id}>
                <video
                  controls
                  className="minia"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                    video.videoData
                  }`}
                  type="video.mp4"
                >
                  <track
                    src="../../assets/WEBVTT.vtt"
                    kind="captions"
                    label="French"
                  />
                </video>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
