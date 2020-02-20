<?php
$conn = mysql_connect("127.0.0.1","root","root");

if(!$conn){
  die("数据库连接失败");	
}

mysql_select_db("sys",$conn);
mysql_query("SET NAMES utf8")

?>