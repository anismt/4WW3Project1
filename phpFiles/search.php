<?php
/*
Here we check for the user id and 
connect to our use sql queries to
get all images.


*/


// Getting ID
if(isset($_GET['ID'])) {

    // SELECT query
    require_once
    $ID = mysqli_real_escape_string($dbc,$_GET['ID']);

    $sql = "SELECT * FROM games WHERE image_ID='$ID'";
    $result= mysqli_query($dbc, $sq1) or die("Bad Query: $sql");
    $row = mysqli_fetch_array($result);

}

?>