<?php
// MySQL server configuration
$servername = "localhost";
$username = "root";
$password = "";

// Connect to MySQL server
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create the database
$sql = "CREATE DATABASE IF NOT EXISTS inventory_man";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully\n";
} else {
    echo "Error creating database: " . mysqli_error($conn) . "\n";
}

// Select the database
mysqli_select_db($conn, "inventory_man");

$sql = "CREATE TABLE `product` (
    `id` int(11) NOT NULL,
    `productName` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` int(11) NOT NULL,
    `available` tinyint(1) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;";

if (mysqli_query($conn, $sql)) {
    echo "Table 'comments' created successfully\n";
} else {
    echo "Error creating table 'comments': " . mysqli_error($conn) . "\n";
}

// Close the connection
mysqli_close($conn);

?>