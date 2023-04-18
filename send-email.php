<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'leonmunene254@gmail.com';
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $body, $headers);

echo 'Thank you for your message!';
?>