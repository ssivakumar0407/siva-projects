<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$Attachments= $_POST['file'];
$message= $_POST['message'];
$to = "sivakumar9007@gmail.com";
$subject = "Career Form";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Mobile =" . $phone;
$headers = "From: noreply@codconia.com" . "\r\n" .
"CC: ssivakumar0407@gmail.com";
if($email!=NULL){	
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>