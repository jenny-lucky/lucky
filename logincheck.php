<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>

<body>
<?php
include("inc.php");
$user_name=$_POST["user_name"];
$user_password=$_POST["user_password"];
$sql = "select * from usertable where user_name='$user_name' and user_password='$user_password'";

$return = mysql_query($sql);
$arr=array();

while($row = mysql_fetch_array($return)){	
   $arr=$row;	
}

if(empty($arr)){
	echo('<script language="JavaScript">;alert("登录失败");window.location.href="denglu.html";</script>;');
	}else{
	echo('<script language="JavaScript">;alert("登录成功");window.location.href="list1.html";</script>;');
	
}

?>

</body>
</html>