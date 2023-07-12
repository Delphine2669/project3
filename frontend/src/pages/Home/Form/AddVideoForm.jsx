function AddVideoForm() {
  return (
    <div>
      <form className="add-video-form">
        <div className="title-section">
          <label htmlFor="title">Titre:</label>
          <input
            id="title"
            placeholder="titre"
            type="text"
            name="title"
            value="title"
          />

          <label htmlFor="time">Durée:</label>
          <input
            id="time"
            placeholder="Durée"
            type="text"
            name="time"
            value="time"
          />
          <label htmlFor="description">description:</label>
          <input
            id="description"
            placeholder="description"
            type="text"
            name="description"
            value="description"
          />
          <label htmlFor="publicationDate">Date de publication:</label>
          <input
            id="publicationDate"
            placeholder="date de publication"
            type="text"
            name="publicationDate"
            value="publicationDate"
          />
          <label htmlFor="videoData">Vidéo:</label>
          <input
            id="videoData"
            placeholder="importez votre vidéo"
            type="text"
            name="videoData"
            value="videoData"
          />
        </div>
      </form>
    </div>
  );
}

export default AddVideoForm;
