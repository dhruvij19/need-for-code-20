<?php
$con = mysqli_connect('localhost','root');

if($con){
	echo file_get_contents("index.html");
}
else{
	echo "No Connection";

}

mysqli_select_db($con, 'edu');

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['password'];

$query = "insert into student( firstname, lastname, email, password)
values('$firstname','$lastname','$email','$password')";

// echo "$query";

mysqli_query($con,$query);

?>