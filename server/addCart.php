<?php
/* 1、连接数据库 */
include_once "./connectDB.php";

$user_id = $_REQUEST["user_id"];
$good_id = $_REQUEST["good_id"];
/* 2、执行添加操作 */
/* 先检查当前的商品在购物车中是否已经存在，如果不存在那么就执行插入操作，否则应该执行修改的操作 num +1 */
$sql = "SELECT * FROM cart WHERE good_id = $good_id AND user_id = $user_id";
$result = mysqli_query($db,$sql);
$num = mysqli_num_rows($result);


if($num == 0){
  $sql = "INSERT INTO cart " .
    "(id,good_id,user_id,num)" .
    "VALUES " .
    "(NULL,$good_id,$user_id,1)";

    var_dump($sql);
}elseif($num == 1){
  $sql = "UPDATE cart SET num = (num +1) WHERE good_id = $good_id AND user_id = $user_id";
}
$retval = mysqli_query($db,$sql);

if (!$retval) {
  die('添加到购物车失败: ' . mysqli_error($conn));

}
echo "添加成功";

?>