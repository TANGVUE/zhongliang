<?php

    include 'connect.php';

    $g_id = $_REQUEST['gid'];
    $u_id = $_REQUEST['uid'];
    $count = $_REQUEST['count'];

    $cnt->set_charset('utf8');
    $sql ="INSERT INTO orders (g_id,u_id,count) VALUES ($g_id,$u_id,$count)";
    $res=$cnt->query($sql);

    if($res){
        $data = array(
            'code' => 0,
            'mesg' => '此商品已经添加至购物车!'
        );
    }else {
        $data = array(
            'code' => 1,
            'mesg' => '商品添加购物车失败!',
            'sql' => $sql
        );
    }

    echo json_encode($data);

?>