<?php
$to = "info@abdullokh.dev";
$tema = "Зашли на сайт";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $tema, $message, $headers);
?>
