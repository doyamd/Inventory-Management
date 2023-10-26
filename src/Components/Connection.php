<?php

$servername = "localhost";
$username = "root";
$password = "";

$database_name = "furniture_data";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}



$sql = "CREATE DATABASE $database_name";
if (mysqli_select_db($conn, $database_name)) {
  
} else {
  if ($conn->query($sql) === TRUE){
    
    }
    else{
    echo "Error creating database: ". $conn->error;
    }
}

 
?>