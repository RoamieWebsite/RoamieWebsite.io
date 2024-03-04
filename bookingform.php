<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "roamie";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//1.  Escape user inputs for security

$customer_id  = $_POST['customer_id '];
$first_name= $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST ['email'];
$phone_number = $_POST ['phone_number'];
 

// attempt insert query execution

mysqli_query($conn, "INSERT INTO Customers (customer_id, first_name, last_name, email, phone_number) VALUES ('$customer_id','$first_name', '$last_name', '$email', '$phone_number')");

if(mysqli_affected_rows($conn)>0){

    echo "Records added successfully.";

} else{

    echo "ERROR: Could not execute $sql. " . mysqli_error($conn);

}


// 2. Escape user inputs for security
    
$destination_id  = $_POST['destination_id']; 
$destination_name = $_POST['destination_name']; 
$country = $_POST['country'];                
$price = $_POST['price'];
 

// attempt insert query execution

mysqli_query($conn, "INSERT INTO Destinations (destination_id, destination_name, country, price) VALUES ('$destination_id', '$destination_name', '$country','$price')");

if(mysqli_affected_rows($conn)>0){

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}


//3. Escape user inputs for security

$flight_id = $_POST['flight_id']; 
$flight_number = $_POST['flight_number'];        
$airline  = $_POST['airline'];        
$departure_airport   = $_POST['departure_airport'];   
$arrival_airport   = $_POST['arrival_airport'];  
$departure_datetime   = $_POST['departure_datetime'];  
$arrival_datetime   = $_POST['arrival_datetime'];     
$price   = $_POST['price'];    


// attempt insert query execution

mysqli_query($conn, "INSERT INTO Flights (flight_id, flight_number, airline, departure_airport, arrival_airport, departure_datetime, arrival_datetime, price ) VALUES ('$flight_id','$flight_number', '$airline', '$departure_airport', '$arrival_airport', '$departure_datetime', '$arrival_datetime', '$price')");

if(mysqli_affected_rows($conn)>0){

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}

//4. Escape user inputs for security

$hotel_id = $_POST['hotel_id']; 
$hotel_name = $_POST['hotel_name'];            
$city  = $_POST['city'];        
$address   = $_POST['address'];
$price_per_night = $_POST['price_per_night'];             


// attempt insert query execution

mysqli_query($conn, "INSERT INTO Hotels (hotel_id, hotel_name, city, address, price_per_night) VALUES ('$hotel_id', '$hotel_name', '$city', '$address','$price_per_night')");

if(mysqli_affected_rows($conn)>0){

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}


//5. Escape user inputs for security

$activity_id = $_POST['activity_id']; 
$activity_name = $_POST['activity_name'];           
$city  = $_POST['city'];        
$description   = $_POST['description'];
$price   = $_POST['price']; 

// attempt insert query execution

mysqli_query($conn, "INSERT INTO Activities (activity_id, activity_name,city, description, price) VALUES ('$activity_id', '$activity_name', '$city', '$description', '$price')");

if(mysqli_affected_rows($conn)>0){

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}


//6. Escape user inputs for security

$booking_id = $_POST['booking_id']; 
$customer_id = $_POST['customer_id'];           
$flight_id  = $_POST['flight_id'];        
$hotel_id   = $_POST['hotel_id'];
$activity_id   = $_POST['activity_id']; 
$booking_date  = $_POST['booking_date'];        
$departure_date   = $_POST['departure_date'];
$return_date   = $_POST['return_date']; 
$num_travelers   = $_POST['num_travelers'];
$total_price   = $_POST['total_price']; 

// attempt insert query execution

mysqli_query($conn, "INSERT INTO Bookings (booking_id, customer_id,flight_id, hotel_id, booking_date, departure_date, num_travelers, total_price) VALUES ('$booking_id', '$customer_id', '$flight_id', '$hotel_id','$activity_id', '$booking_date','$departure_date', '$return_date', '$num_travelers', '$total_price')");

if(mysqli_affected_rows($conn)>0){

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}

// close connection

mysqli_close($conn);
?>
