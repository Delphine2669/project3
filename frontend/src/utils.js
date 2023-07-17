import axios from "axios";
import { useAuth } from "./contexts/AuthContext";

export function authFetch(url, options = {}, token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return fetch(url, { ...options, headers });
}

async function videoCall() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/videos`
    );
    const videosFromDatabase = response.data;
    const videos = videosFromDatabase.map((video) => ({
      id: video.id,
      videoSrc: video.videoData,
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
}

export default videoCall;
