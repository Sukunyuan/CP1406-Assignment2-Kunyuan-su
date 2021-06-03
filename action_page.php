<?php 
$name=$_POST["name"];
echo("Welcom ".$name);<br>
$email=$_POST["email"];
echo("Your email address is: ".$email);<br>
$product=$_POST["productValue"];
echo("Your like product is: ".$product);<br>
$day=$_POST["day"];
$month=$_POST['month'];
echo("Your birthday is: ".$day.$month);
?>