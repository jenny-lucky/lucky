
// $('.pop_quickShop .pdtInfoArea').customScrollbar({
// 	skin: "default-skin", 
// 	hScroll: false,
// 	updateOnWindowResize: true
// })

// 모바일 카테고리 toggle
$(function(){
	$('.pageTitArea .btn_showCate').bind("click", function(){
		if ($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.m_quickArea').stop().fadeIn(200);
			$('.productCate').removeClass('open');
		} else {
			$(this).addClass('on');
			$('.m_quickArea').stop().fadeOut(200);
			$('.productCate').addClass('open');
		}
	});
});

// ����� ��ǰ����Ʈ layout
function ViewTypeFunc(ele){
	if (ele == 1){
		$('.m_productListSort .listType > span.single').addClass('on');
		$('.m_productListSort .listType > span.double').removeClass('on');
		$('#pdtList').removeClass('double').addClass('single');
	} else {
		$('.m_productListSort .listType > span.single').removeClass('on');
		$('.m_productListSort .listType > span.double').addClass('on');
		$('#pdtList').removeClass('single').addClass('double');

	}
}

// ����� �ɼ� �÷�Ĩ
$(function(){
	$('.mobile .pdtList.single .color_chip li a').click(function(){
		var opt_name = $(this).find('img').attr('alt');
		$('.mobile .pdtList.single .color_chip li a').removeClass('over');
		$(this).parents('.color_chip').find('.opt_name').html(opt_name);
		return false;
	});
});

//모바일 카테고리 선택시 action
$(function(){
	$(document).on("click", ".mobile .productCate li a", function(){
		$('.pageTitArea .btn_showCate').click();
		setCateActive(this);
	});
	$(document).on("click", ".tablet .productCate li a", function(){
		setCateActive(this);
	});
	$(document).on("click", ".web .productCate li a", function(){
		setCateActive(this);
	});
	function setCateActive(e){		
		$('.productCate li').removeClass('active');
		$(e).parent().addClass('active');
	}
});


