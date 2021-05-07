<?php
   

 $user = $_POST['email'];
 $pass = $_POST['password'];
	

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
       
       echo "connection success <br>";
       
       
       
       $query = 'select studentUsername, studentPassword from `Students` where studentUsername = "'.$user.'"';
       $result = mysqli_query($conn, $query);
       
      
       
       if($row = mysqli_fetch_array($result)){
      
       
       		echo "".$row["studentUsername"]." ".$row["studentPassword"]." <br>";
           
           
           if($pass != $row["studentPassword"]){
               echo "WDF";
           }else{
               echo "SUCCESS";
               
               ob_start(); // ensures anything dumped out will be caught

            // do stuff here
            $url = 'https://venus.cs.qc.cuny.edu/~famd7995/final/StudentsPage/StudentsPage.html'; // this can be set based on whatever

            // clear out the output buffer
            while (ob_get_status())  
            {
                ob_end_clean();
            }

            // no redirect
            header( "Location: $url" );
               
               
               
               
           }
           
       
       }
       
       
       
       
       
      
   }


?>



