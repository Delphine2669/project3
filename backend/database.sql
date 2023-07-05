-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `nom_id` int NOT NULL,
  PRIMARY KEY (`nom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
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
  `publication_date` varchar(255) DEFAULT NULL,
  `is_favorite` tinyint DEFAULT NULL,
  `is_accessible` tinyint NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (3,'Cyberpucnk_2077_court_circuit',7,'premier_test','2023-06-14',0,1,'~/backend/public/assets/videos/Cyberpucnk_2077_court_circuit.mp4'),(4,'Cyberpucnk_2077_Panam_in_trouble',11,'second_test','2023-06-15',0,1,'~/backend/public/assets/videos/Cyberpucnk_2077_Panam_in_trouble.mp4');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_has_categorie`
--

DROP TABLE IF EXISTS `video_has_categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_has_categorie` (
  `VIDEOS_id` int NOT NULL,
  `CATEGORIES_nom_id` int NOT NULL,
  PRIMARY KEY (`VIDEOS_id`,`CATEGORIES_nom_id`),
  KEY `fk_VIDEOS_has_CATEGORIES_CATEGORIES1_idx` (`CATEGORIES_nom_id`),
  KEY `fk_VIDEOS_has_CATEGORIES_VIDEOS1_idx` (`VIDEOS_id`),
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_CATEGORIES1` FOREIGN KEY (`CATEGORIES_nom_id`) REFERENCES `categorie` (`nom_id`),
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_VIDEOS1` FOREIGN KEY (`VIDEOS_id`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_has_categorie`
--

LOCK TABLES `video_has_categorie` WRITE;
/*!40000 ALTER TABLE `video_has_categorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_has_categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_has_viewer`
--

DROP TABLE IF EXISTS `video_has_viewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_has_viewer` (
  `VIDEOS_id` int NOT NULL,
  `VIEWERS_id` int NOT NULL,
  PRIMARY KEY (`VIDEOS_id`,`VIEWERS_id`),
  KEY `fk_VIDEOS_has_VIEWERS_VIEWERS1_idx` (`VIEWERS_id`),
  KEY `fk_VIDEOS_has_VIEWERS_VIDEOS1_idx` (`VIDEOS_id`),
  CONSTRAINT `fk_VIDEOS_has_VIEWERS_VIDEOS1` FOREIGN KEY (`VIDEOS_id`) REFERENCES `video` (`id`),
  CONSTRAINT `fk_VIDEOS_has_VIEWERS_VIEWERS1` FOREIGN KEY (`VIEWERS_id`) REFERENCES `viewer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_has_viewer`
--

LOCK TABLES `video_has_viewer` WRITE;
/*!40000 ALTER TABLE `video_has_viewer` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_has_viewer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewer`
--

DROP TABLE IF EXISTS `viewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viewer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mdp` varchar(45) NOT NULL,
  `birthday` date NOT NULL,
  `is_favorite` tinyint DEFAULT NULL,
  `is_admin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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

-- Dump completed on 2023-06-21 12:18:11
