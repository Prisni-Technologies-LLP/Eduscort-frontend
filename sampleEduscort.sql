-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2021 at 08:32 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sample`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(6) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `middle_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) NOT NULL,
  `date_of_admission` date NOT NULL,
  `date_of_birth` date NOT NULL,
  `class_name` varchar(10) NOT NULL,
  `roll_no` int(4) DEFAULT NULL,
  `is_active` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `first_name`, `middle_name`, `last_name`, `date_of_admission`, `date_of_birth`, `class_name`, `roll_no`, `is_active`) VALUES
(2, 'Prasad', '', 'Patra', '2020-07-01', '2017-04-06', 'class II', 3, 'Y'),
(3, 'Rukmini', '', 'Verma', '2020-07-01', '2015-03-06', 'class II', 1, 'Y'),
(5, 'Sabyasachi', '', 'Sahay', '2020-07-02', '2004-05-03', 'class XI', 1, 'Y'),
(7, 'Damayanti', ' ', 'Das', '2020-09-01', '2008-06-03', 'class VI', 1, 'Y'),
(8, 'ABC', ' ', 'DEF', '2020-09-01', '2015-02-04', 'class II', 2, 'Y'),
(12, 'Kobe', ' ', 'Asbi', '2020-10-01', '2015-02-03', 'class I', 2, 'Y'),
(14, 'Chole', NULL, 'Ai', '2020-10-01', '2014-02-01', 'class II', 11, 'Y'),
(16, 'Fata', NULL, 'Fati', '2020-09-01', '2006-02-01', 'class IX', 9, 'Y'),
(17, 'Fata', NULL, 'Kesto', '2020-09-01', '2006-02-01', 'IX', NULL, 'N'),
(18, 'Student1', NULL, 'Testing', '2020-09-01', '2016-06-01', 'class I', 1, 'Y'),
(20, 'Student2', NULL, 'Testing', '2020-09-01', '2009-06-08', 'class V', 2, 'Y'),
(22, 'Student3', NULL, 'Testing', '2020-09-01', '2012-06-06', 'class II', 3, 'Y'),
(24, 'Student4', NULL, 'Joining', '2020-09-01', '2011-06-08', 'class III', 4, 'Y'),
(25, 'Jab', NULL, 'Dhan', '2020-09-07', '2010-03-08', 'IV', 12, 'N'),
(26, 'Student5', NULL, 'Admitting', '2020-09-01', '2012-06-06', 'class II', 5, 'Y'),
(27, 'Rahul', NULL, 'Kumar', '2020-09-01', '2013-06-24', 'class IV', 4, 'N');

-- --------------------------------------------------------

--
-- Table structure for table `student_attendance`
--

CREATE TABLE `student_attendance` (
  `student_id` int(6) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `roll_no` int(4) NOT NULL,
  `class_name` varchar(10) NOT NULL,
  `section` varchar(10) DEFAULT NULL,
  `is_active` varchar(3) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `is_present` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `student_attendance`
--
ALTER TABLE `student_attendance`
  ADD PRIMARY KEY (`student_id`,`date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student_attendance`
--
ALTER TABLE `student_attendance`
  ADD CONSTRAINT `student_attendance_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
