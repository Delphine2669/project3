-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Worlds League of Legends'),(2,'Counter Strike: Global Offensive Major'),(3,'Call of Duty World Championship'),(4,'Call of Duty League'),(5,'Fortnite World Cup'),(6,'Dota 2'),(7,'Intel Extreme Masters 2023'),(8,'Overwatch League 2023'),(9,'PUBG Continental Serie'),(10,'World Cyber Gamers'),(11,'Fifa eWorld Cup'),(12,'Lyon e-Sport'),(13,'ZEvent'),(14,'eSports World Convention');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'call of duty','gameplay de jeux de tir','/image/fort2.jpg'),(2,'Cyber Punk','gameplay RPG','/image/fifa1.png'),(3,'Cyber Punk','gameplay RPG','/image/cod4.png'),(4,'call of duty','gameplay de jeux de tir','/image/cod2.jpg');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `time` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `publicationDate` varchar(255) DEFAULT NULL,
  `isFavorite` tinyint DEFAULT NULL,
  `isAccessible` tinyint DEFAULT NULL,
  `videoData` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'The World Is In Danger',9,'call Of video 1','2023-07-10',0,1,'/videos/video1.mp4'),(2,'You Can Do It !',10,'call Of video 2','2023-07-10',0,1,'/videos/video2.mp4'),(3,'Always Troubles',10,'call Of video 3','2023-07-10',0,1,'/videos/video3.mp4'),(4,'The Last Chance',10,'call Of video 4','2023-07-10',0,1,'/videos/video4.mp4'),(5,'CyberPunck Rise',10,'call Of video 5','2023-07-10',0,1,'/videos/video5.mp4'),(6,'Ghost Danger',5,'Starwars 1','2023-07-19',0,1,'/videos/video6.mp4'),(7,'Back To The Future',8,'Starwars 2','2023-07-19',0,1,'/videos/video7.mp4'),(8,'Dark Side',10,'Starwars 3','2023-07-19',0,1,'/videos/video8.mp4'),(9,'Winter Is Coming',10,'Starwars 4','2023-07-19',0,1,'/videos/video9.mp4'),(10,'Never Give Up',10,'Starwars 5','2023-07-19',0,1,'/videos/video10.mp4'),(11,'Cyberpucnk 2077',7,'premier_test','2023-06-14',0,1,'/videos/Cyberpunck_2077_court_circuit.mp4'),(12,'Cyberpucnk Panam in trouble',11,'second_test','2023-06-15',0,1,'/videos/video22.mp4'),(13,'Starting the Adventure!',11,'second_test','2023-06-15',0,1,'/videos/video11.mp4'),(14,'Exploring the Open World',11,'second_test','2023-06-15',0,1,'/videos/video12.mp4'),(15,'A Deep Dive into the Lore ',11,'second_test','2023-06-15',0,1,'/videos/video13.mp4'),(16,'Discovering Hidden Easter Eggs',11,'second_test','2023-06-15',0,1,'/videos/video14.mp4'),(17,'The Impact of Hell',11,'second_test','2023-06-15',0,1,'/videos/video15.mp4'),(18,'The Art of battle',11,'second_test','2023-06-15',0,1,'/videos/video16.mp4'),(19,'The Beast Mods ',11,'second_test','2023-06-15',0,1,'/videos/video17.mp4'),(20,'Breaking Down the Storyline ',11,'second_test','2023-06-15',0,1,'/videos/video18.mp4'),(21,'Building the Ultimate',11,'second_test','2023-06-15',0,1,'/videos/video19.mp4'),(22,'Breaking Barriers: The Fastest',11,'second_test','2023-06-15',0,1,'/videos/video20.mp4'),(23,'Inside the Mind of a Speedrunner',11,'second_test','2023-06-15',0,1,'/videos/video21.mp4');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videoCat`
--

DROP TABLE IF EXISTS `videoCat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videoCat` (
  `videos_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`videos_id`,`category_id`),
  KEY `fk_VIDEOSCATEGORIES_CATEGORIES1_idx` (`category_id`),
  KEY `fk_VIDEOSCATEGORIES_VIDEOS1_idx` (`videos_id`),
  CONSTRAINT `fk_VIDEOsCATEGORIES_CATEGORIES1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_VIDEOSCATEGORIES_VIDEOS1` FOREIGN KEY (`videos_id`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videoCat`
--

LOCK TABLES `videoCat` WRITE;
/*!40000 ALTER TABLE `videoCat` DISABLE KEYS */;
INSERT INTO `videoCat` VALUES (1,1),(12,1),(5,2),(6,2),(2,3),(3,4),(10,4),(9,5),(8,6),(7,7),(16,7),(4,8),(11,8),(15,9),(13,10),(19,10),(23,10),(20,11),(18,12),(22,12),(14,13),(17,13),(21,14);
/*!40000 ALTER TABLE `videoCat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videoViewer`
--

DROP TABLE IF EXISTS `videoViewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videoViewer` (
  `videos_id` int NOT NULL,
  `viewers_id` int NOT NULL,
  PRIMARY KEY (`videos_id`,`viewers_id`),
  KEY `fk_videosViewers_viewers1_idx` (`viewers_id`),
  KEY `fk_videosViewers_videos1_idx` (`videos_id`),
  CONSTRAINT `fk_VIDEOSVIEWERS_videos1` FOREIGN KEY (`videos_id`) REFERENCES `video` (`id`),
  CONSTRAINT `fk_VIDEOSVIEWERS_viewers1` FOREIGN KEY (`viewers_id`) REFERENCES `viewer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videoViewer`
--

LOCK TABLES `videoViewer` WRITE;
/*!40000 ALTER TABLE `videoViewer` DISABLE KEYS */;
/*!40000 ALTER TABLE `videoViewer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewer`
--

DROP TABLE IF EXISTS `viewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viewer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `birthday` date DEFAULT NULL,
  `isFavorite` tinyint DEFAULT NULL,
  `isAdmin` tinyint DEFAULT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewer`
--

LOCK TABLES `viewer` WRITE;
/*!40000 ALTER TABLE `viewer` DISABLE KEYS */;
/*!40000 ALTER TABLE `viewer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-03 21:27:22
