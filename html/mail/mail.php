<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
if(isset($_POST['fname']) && isset($_POST['email'])) {
	//Important - UPDATE YOUR RECEIVER EMAIL ID, NAME AND SUBJECT
		
	// Please enter your email ID 	
	$to_email = 'Your Email';
	// Please enter your name		
	$to_name ="your name";
	// Please enter your Subject
	$subject="Realestate LP Form Query";
	
	$sender_fname 	= "SENDER FIRST NAME : " . $_POST['fname'];
	$sender_lname 	= ( isset($_POST['lname'] ) ) ? "</br> SENDER LAST NAME : ".$_POST['lname'] : '';
	$sender_phone 	= ( isset($_POST['phone'] ) ) ? "</br> SENDER PHONE : " . $_POST['phone'] : '';
	$from_mail 		= "</br> SENDER EMAIL : " . $_POST['email'];		
	$message 		= ( isset($_POST['message'] ) ) ? "</br> SENDER MESSAGE: </br/> " . $_POST['message'] : '';	
	
	$mail->SetFrom( $from_mail , $sender_name );
	$mail->AddReplyTo( $from_mail , $sender_name );
	$mail->AddAddress( $to_email , $to_name );
	$mail->Subject = $subject;	
		
	$received_content = $sender_fname . $sender_lname . $sender_phone . $from_mail . $message;
	
	$mail->MsgHTML( $received_content );
	
	echo $mail->Send();
	exit;	
}