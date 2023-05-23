<?php
$to = "abdullokh.dev@mail.ru";
$tema = "Зашли на сайт";
$message = "Text Ishladi";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $tema, $message, $headers);
?>
