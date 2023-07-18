import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

const ApiCalls = {
  videoCall: async () => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/videos`);
      const videosFromDatabase = response.data;
      const videos = videosFromDatabase.map((video) => ({
        id: video.id,
        videoSrc: video.data,
        caption: video.title,
        title: video.title,
        description: video.description,
      }));
      return videos;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des vidéos depuis la base de données:",
        error
      );
      return [];
    }
  },

  photoCall: async () => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/photos`);
      const photoFromDatabase = response.data;
      const photos = photoFromDatabase.map((photo) => ({
        id: photo.id,
        title: photo.title,
        description: photo.description,
        imageSrc: photo.imageSrc,
      }));
      return photos;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des vidéos depuis la base de données:",
        error
      );
      return [];
    }
  },
};

export default ApiCalls;
