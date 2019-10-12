<?php

    include 'connect.php';

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $tel = $_REQUEST['tel'];
    
    $sql1 = "SELECT * FROM userdb WHERE username='$username'";
    $sql2 = "INSERT INTO userdb(username,password,tel) VALUES('$username','$password','$tel')";
    $exit =false;
    $search = $cnt->query($sql1);
    if($search->num_rows>0){
        $exit =false;
    }else{
        $exit =true;
    }
    
    $res=$cnt->query($sql2);

    if($res && $exit){
        $data = array(
            'code' => 0,
            'mesg' => '注册成功!'
        );
    }else{
        $data = array(
            'code' => 1,
            'mesg' => '注册失败!'
        );
    }

    echo json_encode($data);
    

?>