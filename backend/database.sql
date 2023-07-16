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
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `nom_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,'Worlds League of Legends'),(2,'Counter Strike: Global Offensive Major'),(3,'Call of Duty World Championship'),(4,'Call of Duty League'),(5,'Fortnite World Cup'),(6,'Dota 2'),(7,'Intel Extreme Masters 2023'),(8,'Overwatch League 2023'),(9,'PUBG Continental Serie'),(10,'World Cyber Gamers'),(11,'Fifa eWorld Cup'),(12,'Lyon e-Sport'),(13,'ZEvent'),(14,'eSports World Convention');
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
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (3,'Cyberpunck_2077_court_circuit',7,'premier_test','2023-06-14',0,1,'/videos/Cyberpunck_2077_court_circuit.mp4','s'),
(4,'Cyberpunck_2077_Panam_in_trouble',11,'second_test','2023-06-15',0,1,'/videos/Cyberpunck_2077_Panam_in_trouble.mp4','s'),
(5,'Cacahuette',9,'call Of video 1','2023-07-10',0,1,'/videos/video1.mp4','s'),
(6,'Cacahuette 2 le retour',10,'call Of video 2','2023-07-10',0,1,'/videos/video2.mp4','s'),
(7,'Cacahuette 3 la suite de trop ?',10,'call Of video 3','2023-07-10',0,1,'/videos/video3.mp4','s'),
(8,"Cacahuette 4, trop c'est trop",10,'call Of video 4','2023-07-10',0,1,'/videos/video4.mp4','s');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_has_categorie`
--

DROP TABLE IF EXISTS `video_has_categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_has_categorie` (
  `videos_id` int NOT NULL,
  `categories_nom_id` int NOT NULL,
  PRIMARY KEY (`videos_id`,`categories_nom_id`),
  KEY `fk_VIDEOS_has_CATEGORIES_CATEGORIES1_idx` (`categories_nom_id`),
  KEY `fk_VIDEOS_has_CATEGORIES_VIDEOS1_idx` (`videos_id`),
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_CATEGORIES1` FOREIGN KEY (`categories_nom_id`) REFERENCES `categorie` (`nom_id`),
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_VIDEOS1` FOREIGN KEY (`videos_id`) REFERENCES `video` (`id`)
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
  `videos_id` int NOT NULL,
  `viewers_id` int NOT NULL,
  PRIMARY KEY (`videos_id`,`viewers_id`),
  KEY `fk_videos_has_viewers_viewers1_idx` (`viewers_id`),
  KEY `fk_videos_has_viewers_videos1_idx` (`videos_id`),
  CONSTRAINT `fk_VIDEOS_has_viewers_videos1` FOREIGN KEY (`videos_id`) REFERENCES `video` (`id`),
  CONSTRAINT `fk_VIDEOS_has_viewers_viewers1` FOREIGN KEY (`viewers_id`) REFERENCES `viewer` (`id`)
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
  `username` varchar(45) NOT NULL unique,
  `email` varchar(45) NOT NULL,
  `birthday` date NULL,
  `is_favorite` tinyint DEFAULT NULL,
  `is_admin` tinyint DEFAULT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewer`
--

LOCK TABLES `viewer` WRITE;
/*!40000 ALTER TABLE `viewer` DISABLE KEYS */;
INSERT INTO `viewer` VALUES (4,'BGdu26','bgdu26@tsn.game','1998-07-10',1,0,'$argon2id$v=19$m=16,t=2,p=1$emVmemVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$UKaGZ9hGFn/S5SBQDMe/Uw'),(5,'superAdmin','admind@tsn.game','1980-05-31',1,1,'superman'),(6,'User1234','User1234@tsn.game','2000-10-25',0,0,'easyPassword');
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

-- Dump completed on 2023-07-10 20:58:09
