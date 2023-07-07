import axios from "axios";

async function videoCall2() {
  try {
    const response = await axios.get("http://localhost:6000/videos");
    const videosFromDatabase = response.data;
    const videos = videosFromDatabase.map((video) => ({
      id: video.id,
      videoSrc: video.add_videos,
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

export default videoCall2;
