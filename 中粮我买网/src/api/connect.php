<?php

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'onlineshop';

    $cnt =  new mysqli($servername,$username,$password,$dbname);

    if($cnt->connect_error){
        die('连接数据库失败');
    }
?>