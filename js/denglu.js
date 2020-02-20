/*
* @Author: 洁
* @Date:   2019-11-27 00:09:20
* @Last Modified by:   洁
* @Last Modified time: 2019-11-27 00:16:41
* 
*/
//登录弹窗
    $('.cart-num, .suspension-cart').click(function (ev) {
        loginPop( '/cart' );
        ev.cancelBubble();
    });
    $('.cart-info').on('click', '.cart_info_j', function () {
        loginPop( '/cart' );
    });
    $('#myOrders').click(function () {
        loginPop( '/order/orderList' );
    });
    $('#close-login').click(function () {
        popupLogin.data('redirectTo', '');
        popupLogin.hide(300);
        $(".popup-content").find("input:visible").val('');
        $(".phoneTip").hide();
        $(".accountTip").hide();
        $("#imgs").click();
        $(".login-tab").children("li:eq(0)").click();
    });

    // 搜索框
    $('.search-text').keydown(function(){
        if($(this).val() != ''){
            $('.hot-search').hide('fast');
        }else{
            $('.hot-search').show('fast');
        }
    })

    /**
     * 成功弹窗
     */
    function succ_alert_tip(msg) {
        $('.alert-tip').addClass('success').html(msg);
        var w = $('.alert-tip').width() + 122;
        w = -w/2 + 'px';
        $('.alert-tip').css({"margin-left":w,"display":"block"});
        setTimeout( function () {
            $('.alert-tip').removeClass('success').hide().html('');
        },2000);
    }


    /**
     * 失败弹窗
     */
    function fail_alert_tip(msg) {
        $('.alert-tip').addClass('fail').html(msg).show();
        var w = $('.alert-tip').width() + 122;
        w = -w/2 + 'px';
        $('.alert-tip').css({"margin-left":w,"display":"block"});
        setTimeout( function () {
            $('.alert-tip').removeClass('fail').hide().html('');
        },2000);
    }
    
    $('#close-login').click(function () {
        popupLogin.data('redirectTo', '');
        popupLogin.hide(300);
    });



})

var delFlag = false;
function getCartData( id ) {
    if ( delFlag === true ){
        return false;
    }
    var data = {};
    if ( typeof id !== 'undefined' ){
        data = {'id':id};
        delFlag = true;
    }
    $.ajax({
        type: "post",
        url: "/cart/buildTinyCartBlock",
        dataType: 'json',
        data: data,
        async: true,
        beforeSend:function(){
            $('.cart-list').html('<div class="list_empty"> <img src="/web/images/loading-crop.gif" alt=""> </div>');
            $('.cart-list').show();
        },
        success: function (result) {
            if ( !result.buildData ){
                $('.cart-list').height(0).height(tinyCartHeight);
                if ( showTinyCart ){
                    $('.cart-list').show()
                }
                return false;
            }
            if ( result.error ){
                alert( result.error );
            }else{
                var cartNum = result.proCount > 999 ? '999+' : result.proCount;
                $('.headerCartNum').text(cartNum);
                $('.cart-list').html(result.buildData);
                tinyCartHeight = result.height;
                if($('.zero_good')){
                    $('.zero_good').eq($('.zero_good').length-1).css("border-bottom","1px dotted #e0e0e0");
                }
                $('.list_has').height(tinyCartHeight);
                $('.cart-list').height(0).height( tinyCartHeight );
                if ( showTinyCart ){
                    $('.cart-list').show()
                }
                var nowHref = window.location.href;
                if ( nowHref.indexOf('/cart') != -1 && typeof id !== 'undefined' ){
                    location.reload();
                }
            }
            delFlag = false;
        },
        error: function () {
            delFlag = false;
            alert('网络错误！');
        }
    })
    
}
function loginPop( redirectTo ) {
    if( !redirectTo ){
        redirectTo = window.location.pathname + window.location.search;
        popupLogin.data('redirectTo', redirectTo);
        popupLogin.show(300);
    }else{
        $.ajax({
            type: "post",
            url: "/isLogin",
            dataType: 'json',
            data: {},
            async: true,
            success: function (result) {
                if ( result == 0 ){
                    popupLogin.data('redirectTo', redirectTo);
                    popupLogin.show(300);
                }else{
                    window.location.href = redirectTo;
                }
            }
        });
    }
}


$(function(){

        sessionStorage.backUrl="https://www.zuipin.cn/";

        $('login-methods input').blur(function(){
            if(!$(this).val()){
                $(".tip-red").css('display','none');
            }
        });

        $('.login-tab li').on("click",function(){
            var index = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.login-methods li').eq(index).addClass('on').siblings().removeClass('on');
            $(".mistake_tips").css('display','none');
            if(index == 1){
                $(".regist-forget-box a").css("display",'block');
                $(".regist-forget-box p").css("display",'none');
            }else{
                $(".regist-forget-box a").css("display",'none');
                $(".regist-forget-box p").css("display",'block');
            }
        });
    });
    function checkoutaccount(account){
        var testPhone = /^(1+\d{10})$/;
        var testEmail = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
        if(testPhone.test(account)){
            return true;
        }else if(testEmail.test(account)){
            return true;
        }
        return false;
    }
    //帐号登录验证
    function checkOne(){
        var phone = $('#phone').val();
        var pwd = $('#pwd').val();
        var checkPhone = false;
        var checkPwd = false;
        if(!phone){
            $(".accountTip").css('display','none');
            return true;
        }
        if(phone && checkoutaccount(phone)){
            checkPhone = true;
            $(".accountTip").css('display','none');
        }else{
            $(".accountTip").find('span').text('您输入的账号格式有误，请核实后重新输入');
            $(".accountTip").css('display','block');
            $(".accountLogin").removeClass("hongse");
            return true;
        }
        if(pwd){
            if(pwd.length >=6){
                checkPwd = true;
            }else {
                $(".accountLogin").removeClass("hongse");
                $(".accountTip").find('span').text('密码长度至少6位')
                $(".accountTip").css('display','block');
            }
        }
        if(checkPwd && checkPhone){
            $(".accountLogin").addClass("hongse");
        }
        return true;
    }

    $('#phone').blur(function(){
        checkOne();
    });

    $('#pwd').blur(function(){
        checkOne();
    });

    $("#pwd").keyup(function (){
        if($(this).val().length > 5){
            checkOne();
            if (event.keyCode == 13) {
                $('.accountLogin').click();
            }
        }
    });

    $('.accountLogin').click(function(){

        if(!$(this).hasClass('hongse')){
            return false;
        }

        var token = $('input[name="_token"]').val()
        var phone = $('#phone').val();
        var psw = $('#pwd').val();

        var data = {'phone':phone,'_token':token,'psd':psw}
        $.post('/accountLogin',data,function(d){
            if(d ==1){
                if (sessionStorage.getItem('freeparam')) {   
                    location.href='/cart'
                }else{
                    var redirectTo = $('.popup-login').data('redirectTo');
                    if ( !redirectTo ){
                        redirectTo = 'https://www.zuipin.cn/ ' ;
                    }
                    if(redirectTo.indexOf('captcha') !== -1) {
                        redirectTo = '/' ;
                    }
                    location.href=redirectTo;
                }
            }else if(d == '4064'){
                $(".mistake_tips").css('display','block');
            }else{
                $(".accountTip").find('span').text('账号或密码错误，请核实后重新输入');
                $(".accountTip").css('display','block');
            }
        })
    })

    //短信登录验证
    function checkTwo(){
        var phone = $('#phone2').val();
        var captcha = $('#yzm-input').val();
        var code = $('#code').val();

        var checkPhone = false;
        var checkCaptcha = false;
        var checkCode = false;
        if(phonetest(phone,'phoneTip')){
            checkPhone = true;
            $(".phoneTip").css('display','none');
        }else{
            $(".message-check").removeClass("hongse");
            $(".phoneLogin").removeClass("hongse");
            return true;
        }

        if(captcha){
            if(captcha.length == 5 && checkAuthCode( captcha ) ){
                checkCaptcha = true;
            }else {
                $(".message-check").removeClass("hongse");
                $(".phoneLogin").removeClass("hongse");
                $(".phoneTip").find('span').text('请输入正确的图片验证码!')
                $(".phoneTip").css('display','block');
                return true;
            }
        }else{
            return true;
        }

        if(checkPhone && checkCaptcha && $("#cutNum").val() == 60){
            $(".message-check").addClass("hongse");
        }

        if(code){
            if(code.length == 4 && check_code(code, phone)){
                checkCode = true;
            }else {
                $(".phoneLogin").removeClass("hongse");
                $(".phoneTip").find('span').text('您输入的短信验证码错误，请核对后重新输入')
                $(".phoneTip").css('display','block');
                return true;
            }
        }else{
            return true;
        }

        if(checkPhone && checkCaptcha && checkCode){
            $(".phoneLogin").addClass("hongse");
        }

        return true;
    }

    $('#phone2').blur(function(){
        checkTwo();
    });

    $('#yzm-input').blur(function(){
        checkTwo();
    });

    $('#code').blur(function(){
        checkTwo();
    });
    
    $("#code").keyup(function(){
        if (event.keyCode == 13) {
            $('.phoneLogin').click();
        }
    });
    $(".message-check").click(function(){
        if($(this).hasClass('hongse')){
            send_code();
        }
    });

    function phoneTip(data){
        $(".phoneTip").find('span').text(data);
        $(".phoneTip").css('display','block');
    }

    function changeAuthCode() {
        $('#imgs').attr('src', '/captcha?'+Math.random());
        $('#yzm-input').val('');
    }
    function send_code(){
        var phone = $('#phone2').val()
        var captcha = $('#yzm-input').val();
        var token = $('input[name="_token"]').val()

        if($('.message-check').hasClass('hongse')){
            $.post('/s_code/logining',{'phone':phone,'_token':token,'captcha':captcha},function(data){
                if(data == 1){
                    // alert('验证码已发送，请注意查收')
                    $(".phoneTip").find('span').text('动态密码己发至您的手机，5分钟内有效，请注意查收');
                    $(".phoneTip").css('display','block');
                    cutdown();
                }else if(data == 4064){
                    $(".mistake_tips").css('display','block');
                }else{
                    $(".phoneTip").find('span').text('未知错误');
                    $(".phoneTip").attr('errorMsg',data);
                    $(".phoneTip").css('display','block');
                }
            })
        }
    }

    function cutdown(){
        var cut = $("#cutNum").val();
        if(cut>0){
            cut--;
            $("#cutNum").val(cut);
            $('.message-check').removeClass('hongse');
            $(".message-check").text(cut+'S');
            setTimeout("cutdown()",1000);
        }else{
            $('.message-check').addClass('hongse');
            $("#cutNum").val('60');
            $(".message-check").text('请重新发送');
            cut = '';
        }
    }


    function phonetest(phone,tipClass){
        var myreg = /^(1+\d{10})$/;
        if(!myreg.test(phone)) {
            $("."+tipClass).find('span').text('您输入的账号格式有误，请核实后重新输入')
            $("."+tipClass).css('display','block');
            return false;     
        }else{
            return true;
        }
    }

    function check_code(co,phone){
        if(co && co.length > 3) {
            var token = $('input[name="_token"]').val()
            var captcha = $('#yzm-input').val();
            var flag = false;
            $.ajaxSetup({async:false});
            $.post('/v_code/logining', {'num': co, '_token': token,'phone':phone,'captcha':captcha}, function (data) {
                if (data == 1) {
                    flag = true;
                }else{
                    $("."+tipClass).find('span').text('')
                    $("."+tipClass).css('display','block');
                }
            })
            return flag;
        }else{
            return false;
        }
    }

    //短信登录
    $('.phoneLogin').click(function(){

        if($(this).hasClass('huise')){
            return false;
        }
        var token = $('input[name="_token"]').val();
        var num = $('#code').val();
        var phone = $('#phone2').val();
        if(!phone || !num){
            //phoneTip('手机号或验证码不能为空');
            return false;
        }

        if(!phonetest(phone,'phoneTip')){
            phoneTip('您输入的账号格式有误，请核实后重新输入')
            return false;
        }
        if(!check_code(num,phone)){
            phoneTip('验证码错误，请重新输入')
            return false;
        }
        var info = {'num':num,'_token':token,phone:phone}

        $.post('/phoneLogin',info,function(data){
            if(data==1){
                if (sessionStorage.getItem('freeparam')) {   
                           location.href='/cart'
                }else{
                    var redirectTo = $('.popup-login').data('redirectTo');
                    if ( !redirectTo ){
                        redirectTo = 'https://www.zuipin.cn/ ' ;
                    }
                    location.href=redirectTo;
                }
            }else if(data == '4064'){
                $(".mistake_tips").css('display','block');
            }else{
                phoneTip(data)
            }
        })
    })


    function checkAuthCode( code ) {
        var result = false;
        $.ajaxSetup({async:false});
        $.post('/login/checkAuthCode',{'code':code},function(data){
            if(data.status == 1){
                result = true;
            }
        })
        return result;
    }

    function setCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }else{
            var expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    }
    // 获取cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    // 删除cookie
    function deleteCookie(name) {
        setCookie(name,"",-1);
    }

    $(".thirdlogin").find("a").click(function(){
        var redirectTo = $('.popup-login').data('redirectTo');
        if ( !redirectTo ){
            redirectTo = 'https://www.zuipin.cn/ ' ;
        }
        setCookie("redirectUrl",redirectTo,7);
    });