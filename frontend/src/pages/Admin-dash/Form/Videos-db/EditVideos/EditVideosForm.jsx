import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import "./EditVideosForm.scss";
import Footer from "../../../../../components/Footer/Footer";
import Header from "../../../../../components/Header/Header";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "200",
  hideDuration: "500",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
function EditVideoForm() {
  const [videoId, setVideoId] = useState("");
  // const inputRef = useRef(null);

  const [videoData, setVideoData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    // file: null,
  });

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setVideoData(data);
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { title, time, description, publicationDate, file } = videoData;

    // const formData = new FormData();
    // formData.append("title", videoData.title);
    // formData.append("time", videoData.time);
    // formData.append("description", videoData.description);
    // formData.append("publicationDate", videoData.publicationDate);
    // formData.append("videoData", videoData.file);

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });
      toastr.success("Video successfully updated!");
    } catch (error) {
      console.error("Error updating video:", error);
      toastr.error("Video update failed.");
    }
  };

  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleChange = (e) => {
    setVideoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleFileChange = (ev) => {
  //   setVideoData((prevData) => ({
  //     ...prevData,
  //     file: ev.target.files[0],
  //   }));
  // };

  return (
    <div className="edit-video-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back to the Admin Page
        </NavLink>
      </div>
      <div className="edit-video-form-container">
        <h1 className="edit-video-form-title">EDIT VIDEOS</h1>
        <form
          method="PUT"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`}
          className="edit-video-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="videoId"
            className="video-id-input-label edit-video-label"
          >
            Id of the Video:
          </label>
          <br />
          <input
            id="videoId"
            type="number"
            placeholder="Enter the id of the video to edit"
            value={videoId}
            className="video-id-input input-evf"
            onChange={handleVideoIdChange}
          />
          <br />
          <div className="title-section">
            <label htmlFor="title" className="edit-video-label">
              Title:
            </label>
            <input
              className="input-evf"
              id="title"
              placeholder="Title"
              type="text"
              name="title"
              value={videoData.title}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="time-section">
            <label htmlFor="time" className="edit-video-label">
              Duration:
            </label>
            <input
              className="input-evf"
              id="time"
              placeholder="Duration in seconds"
              type="number"
              name="time"
              value={videoData.time}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="description-section">
            <label htmlFor="description" className="edit-video-label">
              Description:
            </label>
            <input
              className="input-evf"
              id="description"
              placeholder="Description"
              type="text"
              name="description"
              value={videoData.description}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="publication-date-section">
            <label htmlFor="publicationDate" className="edit-video-label">
              Publication date:
            </label>
            <input
              className="input-evf"
              id="publicationDate"
              placeholder="Publication Date"
              type="date"
              name="publicationDate"
              value={videoData.publicationDate}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          {/* <div className="video-data-section">
            <label htmlFor="videoData" className="edit-video-label">
              Video:
            </label>
            <input
              id="videoData"
              type="file"
              name="videoData"
              ref={inputRef}
              onChange={handleFileChange}
            />
          </div>
          <br /> */}
          <button type="submit">Update Video</button>
        </form>
      </div>
      <div className="footerAdmin">
        <Footer />
      </div>
    </div>
  );
}

export default EditVideoForm;
