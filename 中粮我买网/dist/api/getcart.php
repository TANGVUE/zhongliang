<?php

    include 'connect.php';

    $u_id = $_REQUEST['uid'];

    $sql ="SELECT orders.o_id,orders.g_id,orders.u_id,orders.count,goods.g_name,goods.g_price,goods.g_url,g_shop FROM orders,goods WHERE orders.u_id =$u_id AND goods.g_id = orders.g_id";

    $cnt->set_charset('utf8');

    $res=$cnt->query($sql);

    if($res->num_rows!=0){
        $data = array(
            'code' => 0,
            'orders' => $res->fetch_all(MYSQLI_ASSOC)
        );
    }else {
        $data = array(
            'code' => 1,
            'orders' => ''
        );
    }


    echo json_encode($data);
?>