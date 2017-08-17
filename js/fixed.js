$(function(){
	
//吸顶菜单，如果滚动条超过500px,就显示	
	$(window).scroll(function(){

		if($(document).scrollTop()<=800){
			$("#fix_menu").stop().fadeOut();
		}else{
			$("#fix_menu").stop().fadeIn();	
		}
		//console.log($(document).scrollTop());
	})

function scrollMove(){
//左侧楼梯导航
	//滚动时自动改变颜色
	$(window).scroll(function(){
		if($(document).scrollTop()>0&&$(document).scrollTop()<633){
			$("#left_fix_nav").children().eq(4).css("background","#333").siblings().css("background","#fff");
		}else if($(document).scrollTop()>633&&$(document).scrollTop()<1241){
			$("#left_fix_nav").children().eq(0).css("background","#333").siblings().css("background","#fff");
			
		}else if($(document).scrollTop()>1241&&$(document).scrollTop()<2549){
			$("#left_fix_nav").children().eq(1).css("background","#333").siblings().css("background","#fff");
			
		}else if($(document).scrollTop()>2549&&$(document).scrollTop()<3752){
			$("#left_fix_nav").children().eq(2).css("background","#333").siblings().css("background","#fff");
			
		}else if($(document).scrollTop()>3752){
			$("#left_fix_nav").children().eq(3).css("background","#333").siblings().css("background","#fff");
			
		}
		if($(document).scrollTop()<=500){
			$("#left_fix_nav").stop().fadeOut();
		}else{
			$("#left_fix_nav").stop().fadeIn();	
		}

	})
	//鼠标滑过时
	$("#left_fix_nav").children().mouseenter(function(){
		$(this).css("background","#333");
	})
	$("#left_fix_nav").children().mouseleave(function(){
		$(this).css("background","#fff");
	})
	$("#left_fix_nav").children().click(function(){
		
		//console.log($(this).index());
		
		if($(this).index()==4){
			$("html,body").animate({
				scrollTop:0
			});
		}else{
			$("html,body").animate({
				scrollTop:$(".louti").eq($(this).index()).offset().top-50
			});
			//console.log($(".louti").eq($(this).index()).offset().top-50);
		
		}
	})
}
scrollMove();

//右侧购物车导航
function sideBar_fixed(){
	
	//我的账户动画
	$(".count_logo").mouseenter(function(){
		
		//console.log(1);//测试成功
		$(".count_move").stop().animate({
			"right":"38px",
			"opacity":"1"
		})
	})
	$(".myCount").mouseleave(function(){
		
		//console.log(1);//测试成功
		$(".count_move").stop().animate({
			"right":"70px",
			"opacity":"0"
		})
	})
	
	//我的购物车
	$(".sideCart_text").click(function(){
		
		//console.log(1);//测试成功
		$(".sideCart_cont").css("display","block");
		$(".sideCart_cont").stop().animate({
			"display":"none",
			"width":"300px",
			"opacity":"1"
		})
	})
	$(".sideCart_cont_title").find("span").click(function(){
		
		//console.log(1);//测试成功
		$(".sideCart_cont").stop().animate({
			"width":"0",
			"opacity":"0"
		},function(){
			$(".sideCart_cont").css("display","none");
		})
		
	})

	
	//我的收藏
	$(".store_logo").mouseenter(function(){
		
		//console.log(1);//测试成功
		$(".store_move").stop().animate({
			"right":"38px",
			"opacity":"1"
		})
	})
	$(".myStore").mouseleave(function(){
		
		//console.log(1);//测试成功
		$(".store_move").stop().animate({
			"right":"70px",
			"opacity":"0"
		})
	})
	//我的记录>>>>>>>>移动的小黑条
	$(".history_logo").mouseenter(function(){
		
		//console.log(1);//测试成功

		$(".history_move").stop().animate({
			"right":"38px",
			"opacity":"1"
		})
	})
	$(".myHistory").mouseleave(function(){
		
		//console.log(1);//测试成功

		$(".history_move").stop().animate({
			"right":"70px",
			"opacity":"0"
		})
	})
	//我的记录>>>>>>>点击出现的记录框
	$(".history_logo").click(function(){
		
		//console.log(1);//测试成功
		$(".history_cont").css("display","block");
		
		$(".history_cont").stop().animate({
			"width":"300px",
			"opacity":"1"
		})
	})
	$(".history_cont_title").find("span").click(function(){
		
		//console.log(1);//测试成功

		$(".history_cont").stop().animate({
			"width":"0",
			"opacity":"0"
		},function(){
			$(".history_cont").css("display","none");
		})
	})
	
	//二维码
	$(".weChat_logo").mouseenter(function(){
		
		//console.log(1);//测试成功

		$(".weChat_move").stop().animate({
			"right":"40px",
			"opacity":"1"
		})
	})
	$(".weChat").mouseleave(function(){
		
		//console.log(1);//测试成功

		$(".weChat_move").stop().animate({
			"right":"70px",
			"opacity":"0"
		})
	})
	//线上客服
	$(".online_logo").mouseenter(function(){
		
		//console.log(1);//测试成功

		$(".online_move").stop().animate({
			"right":"40px",
			"opacity":"1"
		})
	})
	$(".online_talk").mouseleave(function(){
		
		//console.log(1);//测试成功

		$(".online_move").stop().animate({
			"right":"70px",
			"opacity":"0"
		})
	})
	//点击toTop回到顶部
	$(".toTop").click(function(){
		//console.log(1);//测试点击事件通过
		$("html,body").stop().animate({
			scrollTop:0
		})
	})
	
}
sideBar_fixed();
})
