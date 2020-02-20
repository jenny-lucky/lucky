<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>豆蔻</title>
<link rel="stylesheet" type="text/css" href="css/ggong.css">
<link rel="stylesheet" type="text/css" href="css/douko.css">
</head>
<body>
	<body class="web">
    <div class="wideContent">
                <div class="pageTitArea">
                    <!-- location -->
                    <div id="location">
                        <p>
                            <a href="list1.html" class="home"><span>Home</span></a>
                            <strong id="locationTitle">豆蔻</strong>
                        </p>
                    </div>
                    <!-- //location -->


                    <h3 class="h3_tit">

                        <span class="bg_line"><span id="currentTitle">豆蔻</span><!--  <span class="total">(7)</span> --></span>
                        <span class="eng" id="engcate">Amomum kravanh    </span>

                        <button class="btn_showCate"><img src="img/bg_pageTitArea.png" height="38" width="142" alt="category view"></button>

                    </h3>
                    <!-- sns -->
                    <div class="sns-share parbase sns-button">

                    </div>

                    <!-- //sns -->
                    <div class="titCate" style="display: none;"></div>
                </div>
                
                <div class="productCate">
                <strong></strong>

                <ul>
                   <!--  <script>
                        $("#locationTitle").html("洁面");
                        $("#currentTitle").html("洁面");
                        $("#engcate").html("Cleansing   ");
                        $(".total").html("");
                    </script>
                     -->
                    
                    
                    
                    <li>
                        <a href="/category/product1/skin_care/cleansing/index.html" ap-click-area="Product" ap-click-name="Click - Product List Link" ap-click-data="鲜果粒系列">
                            <span id="cleansing">鲜果粒系列</span>
                            <span class="eng">Fresh fruit series    </span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/category/product1/skin_care/boosting/index.html" ap-click-area="Product" ap-click-name="Click - Product List Link" ap-click-data="塞上冰封系列">
                            <span id="cleansing">塞上冰封系列</span>
                            <span class="eng">Ice pack series     </span>
                        </a>
                    </li>
                     <li>
                        <a href="/category/product1/skin_care/boosting/index.html" ap-click-area="Product" ap-click-name="Click - Product List Link" ap-click-data="芬芳花果茶系列">
                            <span id="cleansing">芬芳花果茶系列</span>
                            <span class="eng">Fragrant flower and fruit tea series     </span>
                        </a>
                    </li>
        

                </ul>
            </div>

               
       <?php
             include("commodity.php");     
?>
    </div>
</body>
</html>

