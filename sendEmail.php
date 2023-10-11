<?php
   // Get the form data
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   // Set up the email parameters
   $toEmail = "your-email@example.com";
   $subject = "New contact form submission";
   $body = "Name: " . $name . "\n";
   $body .= "Email: " . $email . "\n";
   $body .= "Message: " . $message;

   // Send the email
   if (mail($toEmail, $subject, $body)) {
     echo "Email sent successfully!";
   } else {
     echo "Email sending failed";
   }
   ?>