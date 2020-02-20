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
//检测用户名存不存在
$sql="select * from usertable where user_name='$user_name'";
$return = mysql_query($sql);
$arr=array();

while($row = mysql_fetch_array($return)){	
   $arr[]=$row;	
}

if(!empty($arr)){
	die("用户名已经存在");
	}

$sql = "insert into usertable(user_name,user_password) values('$user_name','$user_password');";

$r=mysql_query($sql);
	if($r){
		echo('<script language="JavaScript">;alert("注册成功");location.href="denglu.html";</script>;');
	}else{
		echo('<script language="JavaScript">;alert("注册失败");location.href="denglu.html";</script>;');

	}
?>

</body>
</html>