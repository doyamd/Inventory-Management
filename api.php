<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventory_man";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// API endpoints
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve all products
    if (!isset($_GET['id'])) {
        $sql = "SELECT * FROM product";
        $result = $conn->query($sql);
        $products = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $products[] = $row;
            }
        }
        echo json_encode($products);
    }
    // Retrieve a specific product
    else {
        $product_id = $_GET['id'];
        $sql = "SELECT * FROM product WHERE id = $product_id";
        $result = $conn->query($sql);
        $product = $result->fetch_assoc();
        echo json_encode($product);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $product_name = $_POST['productName'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $available = $_POST['available'];

    $sql = "INSERT INTO product (productName, description, price, available)
            VALUES ('$product_name', '$description', $price, $available)";
    if ($conn->query($sql) === true) {
        echo "New product created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    
    parse_str(file_get_contents("php://input"), $put_vars);
    $product_id = $put_vars['id'];
    echo $product_id;
    $product_name = $put_vars['productName'];
    $description = $put_vars['description'];
    $price = $put_vars['price'];
    $available = $put_vars['available'];

    $sql = "UPDATE product SET productName='$product_name', description='$description',
            price=$price, available=$available WHERE id=$product_id";
    if ($conn->query($sql) === true) {
        echo "Product updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    
    parse_str(file_get_contents("php://input"), $delete_vars);
    // $ans = file_get_contents("php://input");
    // echo $ans;
    $product_id = isset($delete_vars['id']) ? $delete_vars['id'] : null;

    if ($product_id !== null) {
        $sql = "DELETE FROM product WHERE id=$product_id";
        if ($conn->query($sql) === true) {
            echo "Product deleted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Product ID is missing";
    }
}

$conn->close();
?>