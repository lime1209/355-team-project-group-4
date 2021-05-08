<?php

   $host = "mars.cs.qc.cuny.edu";
   $username = "kcbh8602";
   $password = "23148602";
   $dbname = "kcbh8602";
   // connection
   $conn = mysqli_connect($host,$username,$password,$dbname);
   $db = $conn;
   //check
   if($conn->connection_error){
       
        die("Connection Failed :". mysqli_connect_error());
       

       
   }else{
   
   		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
       
      
       
       
       
     
       session_start();
       //session start
       
       $query = '
SELECT studentUsername, courseDescription, courseNum , staffName, semesterYear, studentGrade
FROM kcbh8602.Students 
join StudentCourseHistory
on Students.studentID = StudentCourseHistory.studentID 
join Courses
on StudentCourseHistory.courseID = Courses.courseID
join Staffs
on StudentCourseHistory.staffID = Staffs.staffID
where studentUsername = "'.$_SESSION['user'].'"';
       $result = mysqli_query($conn, $query);
       
       while($row = mysqli_fetch_array($result)){
           
           echo "".$row["courseDescription"]."| ".$row["courseNum"]."| ".$row["staffName"]."| ".$row["semesterYear"]."|".$row["studentGrade"]."| ?";
       }
       
       
      
   }


?>



