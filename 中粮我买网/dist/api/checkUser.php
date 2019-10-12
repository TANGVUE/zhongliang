<?php
    include 'connect.php';

    $username = $_REQUEST['username'];

    $sql = "SELECT *FROM userdb WHERE username='$username'";

    $res =$cnt->query($sql);

    if($res->num_rows == 0){
        $data = array(
            'code' =>0,
            'mesg' =>'该用户用可以使用！'
        );
    }else{
        $data = array(
            'code' =>1,
            'mesg' =>'该用户用名已经被占用！'
        );
    }


    echo json_encode($data);

?>