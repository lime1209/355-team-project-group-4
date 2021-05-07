<?php
   

 $date = $POST['date'];
 $id = $POST['id'];
 $lastName = $POST['lName'];
 $firstName = $POST['fName'];
 $midName = $POST['mName'];
 $address = $POST['address'];
 $email = $POST['email'];
 $homePhone = $POST['homePhoneNum'];
 $cellPhone = $POST['cellPhoneNum'];

$withdrawlArr = array(
array($POST['course0'],$POST['code0'],$POST['year0'],$POST['instructor0'],$POST['grade0']),
array($POST['course1'],$POST['code1'],$POST['year1'],$POST['instructor1'],$POST['grade1']),
array($POST['course2'],$POST['code2'],$POST['year2'],$POST['instructor2'],$POST['grade2']),
array($POST['course3'],$POST['code3'],$POST['year3'],$POST['instructor3'],$POST['grade3']),
array($POST['course4'],$POST['code4'],$POST['year4'],$POST['instructor4'],$POST['grade4'])
    
);


   $host = "venus.cs.qc.cuny.edu";
   $username = "KCBH8602";
   $password = "23148602";
   $dbname = "KCBH8602";
   // connection
   $conn = mysqli_connect($host,$username,$password,$dbname);
   //check
   if($conn->connection_error){
       echo "connection success";
       
       
       
       
       
       
       
       
       
       
       
       
       
       
   }else{
       die("Connection Failed :". mysqli_connect_error());
   }


?>



