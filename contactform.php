<?php

if(isset($_POST['submit'])) {
    $subject = "hiring";
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $email = $_POST['message'];

    $mailTo="jeremiahnpitts@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message."\nPhone number is ".$phone;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html?mailsend");


}