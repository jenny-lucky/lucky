<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>共同代码</title>

</head>
<body>
 <div class="productListSort">
                    <div class="sortType">
                        <span class="tit"><img src="img/txt_filter.png" alt="Filter"></span>
                        <ul class="hover">

                            <li id="PRICE_DESC" class="on">
                                <button type="button" title="价格由高到低顺序" onclick="fnShoppingListOrderSearch('PRICE_DESC');">
                                    <span>价格由高到低顺序</span></button>
                            </li>
                               <li id="PRICE_ASC" class="">
                                <button type="button" title="价格由低到高顺序" onclick="fnShoppingListOrderSearch('PRICE_ASC');">
                                    <span>价格由低到高顺序</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- web -->

                <!-- mobile -->
                <div class="m_productListSort">
                    <div class="sortType">
                        <div class="select-group noBtn opt_sec">
                            <div class="select-ul">
                                <button class="title" type="button" title="search option select">热销顺序</button>
                                <ul class="selList">
                                    <li>
                                        <label for="04">
                                            价格由高到低顺序
                                            <input type="radio" value="" class="option" id="04" name="orderRadio" onclick="fnShoppingListOrderSearch('PRICE_DESC');">
                                        </label>
                                    </li>
                                    <li>
                                        <label for="05">
                                            价格由低到高顺序
                                            <input type="radio" value="" class="option" id="05" name="orderRadio" onclick="fnShoppingListOrderSearch('PRICE_ASC');">
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="listType">
                        <span class="single on"><button type="button" onclick="ViewTypeFunc(1);">1type view</button></span>
                        <span class="double"><button type="button" onclick="ViewTypeFunc(2);">2type view</button></span>
                    </div>
                </div>
                <!-- //mobile -->

<?php
             include("inc.php");
             $sql="select * from product";
             $return = mysql_query($sql);
             $data=array();
            while ($row=mysql_fetch_array($return)) {
            $data[]=$row;
            }
            foreach ($data as $value) {

?>

                <div class="content">
            <?php

                echo "
                    <div class='pdListArea'>
                           
                <ul id='pdtList' class='pdtList single slick-initialized slick-slider'>
                
                                
                <li class='pdtItem'>
                <div class='item'>
                <span class='frame_wrap'>
                            <span class='LT'></span>
                            <span class='RT'></span>
                            <span class='LB'></span>
                            <span class='RB'></span>
                            </span>
              <a href='ckxq.html' ap-click-area='Product' ap-click-name='Click - Product Detail Link' ap-click-data='/&quot;Age' control='' cleansing='' foam'=''>
                    <div class='pdtThumb'>
                                    <span class='opt_thumb'><img src='img/".$value[3]."' height='210' width='210'></span>
                            </div>          
                    <div class='pdtInfo'>
                        <p class='opt_tit'>".$value[1]."</p>
                        <p class='opt_des'>".$value[4]."</p>
                        <span class='opt_price'>".$value[2]."&nbsp;元</span>
                        </div></a>
                            <p class='opt_btn'><a class='btn_cart' href='ckxq.php'>查看详细</a></p></div></li>

                </ul>
"; ?>
</div>
<?php
}

?>
</div>
</body>
</html>
<script type="text/javascript" src="js/ls.js"></script>
<script type="text/javascript" src="js/ls1.js"></script>