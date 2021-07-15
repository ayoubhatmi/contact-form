<?php 

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];

    $to ="ayoub.hatmi18@gmail.com";
    $subject = "New contact from " .$name;
    $body = "";
    
    $body .= "Name : " .$name. "\r\n";
    $body .= "Phone : " .$phone. "\r\n";
    $body .= "Email : " .$mail. "\r\n";
    $body .= $message. "\r\n";
    
    if($mail !=NULL){
    mail($to, $subject, $body);
    header("Location: index.html")  ;
    header("Location: done.html")  ;
}

?>