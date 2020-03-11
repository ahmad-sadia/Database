-- --------------------------------------------------------
-- Host:                         192.168.2.1
-- Server version:               5.7.28-0ubuntu0.18.04.4 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table 2dv513_assign3.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_projects_users` (`userId`),
  CONSTRAINT `FK_projects_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table 2dv513_assign3.projects: ~0 rows (approximately)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- Dumping structure for table 2dv513_assign3.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectId` int(11) unsigned NOT NULL DEFAULT '0',
  `userId` int(11) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `description` text,
  `hours` int(11) unsigned NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tasks_projects` (`projectId`),
  KEY `FK_tasks_users` (`userId`),
  CONSTRAINT `FK_tasks_projects` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`),
  CONSTRAINT `FK_tasks_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table 2dv513_assign3.tasks: ~0 rows (approximately)
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

-- Dumping structure for view 2dv513_assign3.tasksToday
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tasksToday` (
	`projectName` VARCHAR(255) NULL COLLATE 'utf8mb4_general_ci',
	`id` INT(11) UNSIGNED NOT NULL,
	`projectId` INT(11) UNSIGNED NOT NULL,
	`userId` INT(11) UNSIGNED NOT NULL,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`description` TEXT NULL COLLATE 'utf8mb4_general_ci',
	`hours` INT(11) UNSIGNED NOT NULL,
	`createdAt` DATETIME NULL,
	`updatedAt` DATETIME NULL
) ENGINE=MyISAM;

-- Dumping structure for table 2dv513_assign3.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL DEFAULT '0',
  `ip` varchar(50) NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `expiredAt` datetime DEFAULT NULL,
  `accessedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `FK_tokens_users` (`userId`),
  CONSTRAINT `FK_tokens_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 2dv513_assign3.tokens: ~0 rows (approximately)
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` (`id`, `userId`, `ip`, `createdAt`, `updatedAt`, `expiredAt`, `accessedAt`) VALUES
	(2, 21, '::ffff:77.105.196.223', '2020-01-15 03:59:57', '2020-01-15 03:59:57', '2020-01-16 03:59:57', '2020-01-15 03:59:57'),
	(3, 21, '::ffff:77.105.196.223', '2020-01-15 04:00:51', '2020-01-15 04:00:51', '2020-01-16 04:00:51', '2020-01-15 04:00:51');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

-- Dumping structure for table 2dv513_assign3.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL DEFAULT '',
  `admin` tinyint(4) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 2dv513_assign3.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `firstName`, `lastName`, `admin`, `createdAt`, `updatedAt`) VALUES
	(21, 'admin', '$argon2i$v=19$m=4096,t=3,p=1$cZ6ueBIrzy5bqV/tKz5XQA$pk88nk0I77JhOzPBq9SJ5m6dquPtc2HpvamiBwLoVyo', '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for view 2dv513_assign3.usersOnline
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `usersOnline` (
	`username` VARCHAR(255) NULL COLLATE 'utf8mb4_general_ci',
	`id` INT(11) UNSIGNED NOT NULL,
	`userId` INT(11) UNSIGNED NOT NULL,
	`ip` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`createdAt` DATETIME NULL,
	`updatedAt` DATETIME NULL,
	`expiredAt` DATETIME NULL,
	`accessedAt` DATETIME NULL,
	`lastAccess` BIGINT(21) NULL
) ENGINE=MyISAM;

-- Dumping structure for view 2dv513_assign3.tasksToday
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tasksToday`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `tasksToday` AS select `projects`.`name` AS `projectName`,`tasks`.`id` AS `id`,`tasks`.`projectId` AS `projectId`,`tasks`.`userId` AS `userId`,`tasks`.`name` AS `name`,`tasks`.`description` AS `description`,`tasks`.`hours` AS `hours`,`tasks`.`createdAt` AS `createdAt`,`tasks`.`updatedAt` AS `updatedAt` from (`tasks` left join `projects` on((`projects`.`id` = `tasks`.`projectId`))) where (cast(`tasks`.`createdAt` as date) = curdate());

-- Dumping structure for view 2dv513_assign3.usersOnline
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `usersOnline`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `usersOnline` AS select `users`.`username` AS `username`,`tokens`.`id` AS `id`,`tokens`.`userId` AS `userId`,`tokens`.`ip` AS `ip`,`tokens`.`createdAt` AS `createdAt`,`tokens`.`updatedAt` AS `updatedAt`,`tokens`.`expiredAt` AS `expiredAt`,`tokens`.`accessedAt` AS `accessedAt`,timestampdiff(MINUTE,`tokens`.`accessedAt`,now()) AS `lastAccess` from (`tokens` left join `users` on((`users`.`id` = `tokens`.`userId`))) where ((now() < `tokens`.`expiredAt`) and (timestampdiff(MINUTE,`tokens`.`accessedAt`,now()) < 5));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
