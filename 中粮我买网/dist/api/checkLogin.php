<?php

    include 'connect.php';

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql ="SELECT * FROM userdb WHERE username='$username' AND `password`='$password'";

    $res = $cnt->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);

    if($res->num_rows!=null){
        $data =array(
            'code' =>0,
            'mesg'=>'登录成功！',
            'userid' =>$arr[0]['u_id']
        );
    }else{
        $data =array(
            'code' =>1,
            'mesg'=>'登录失败！'
        );
    }

    echo json_encode($data);

?>