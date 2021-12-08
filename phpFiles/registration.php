<?php
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$password2 = $_POST['password2'];

	// Database connection
	$conn = new mysqli('localhost','root','mcmaster123','APDatabase');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(username, email, password, password2) values(?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $username, $email, $password, $password2);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>