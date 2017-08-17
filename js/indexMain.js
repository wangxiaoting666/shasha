function topCallBack(){
$(function(){
	
	function buyCar_auto(){
		//顶部购物车滑过出来的提示信息
		
		$(".link_buyCar").hover(fn1,fn2);
		
		function fn1(){
			
			$("#buyCar_po").stop().fadeIn(500);
		}
		
		function fn2(){
			
			$("#buyCar_po").stop().fadeOut(1000);
		}
	}
	buyCar_auto();
	
	function shoufengqin_index(){
		//首页顶部的手风琴效果
		
		$(".sfq").children().mouseenter(function(){
			
			//鼠标滑过

			$(this).stop().animate({
				
				"width":"115px"
				
			},300).siblings().stop().animate({
				
				"width":"35px"
				
			},300)

		})
	
	}
	shoufengqin_index();
	

	function topNav_menu_index(){
		
		
		
		//鼠标滑过变色
		
		$(".n_B_L_Ul").find(".H").mouseenter(function(){
			
			$(this).css("background","#CA1466");
			
			$(".nav_saojiao01").css("borderColor","  #eee #CA1466 #CA1466 #CA1466");
			
			$(".nav_saojiao02").css("borderColor","   #CA1466 #CA1466 #eee #CA1466");

		})
		$(".n_B_L_Ul").find(".H").mouseleave(function(){
			
			$(this).css("background","#EC417D");
			
			$(".nav_saojiao01").css("borderColor"," #eee #EC417D #EC417D  #EC417D");
			
			$(".nav_saojiao02").css("borderColor","   #EC417D #EC417D #eee #EC417D");
			
			
		})
		
		//主页顶部导航菜单下的二级菜单
		
		$(".MENU").hover(fn1,fn2)
		
		//鼠标滑过下拉，鼠标移出后滑上去
		
		function fn1(){
			
			$(".nav_two").css("border","1px solid #BABABA");
			$(".nav_saojiao02").css("borderColor","#CA1466 #CA1466 #eee #CA1466");
			$(".nav_two").stop().animate({

				"height":"280px"
			
			},300,function(){
				
				$(".nav_saojiao02").css("display","block");
				
			});
			
		}
		function fn2(){
			$(".nav_saojiao02").css("borderColor","#EC3E7D #EC3E7D #eee #EC3E7D");

			$(".nav_two").stop().animate({

				"height":"0"
			
			},300,function(){

				$(".nav_saojiao02").css("display","none");
				
				$(".nav_two").css("border","0");
				
			});
			
		}
		
		
//导航左侧的三级菜单
		
		//调用ajax
		
		$.ajax({
			
			url:"data/category.json",
			type:"GET",
			success:function(res){
				//console.log(res[0].oUl01.ul);//["保湿", "美白提亮", "提亮祛斑", "收毛孔"]
				//console.log(res[0].oUl01.U3_01);//热门功效
//				console.log(res[0].oUl01_01.U3_02);//热门功效
				//console.log(res[0].oUl01.ul.length);//1
				var html05 = "";
				for(var i=0;i<res.length;i++){//求出res的长度
					
					//定义变量放内容
				
					var html01 = "";
					
					var html02 = "";
					
					var html03 = "";
					
					var html04 = "";
					
					var html06 = "";
					var html07 = "";
					
					//第一个循环，将oUl01中的内容获取
					
					for(var j=0;j<res[i].oUl01.ul.length;j++){
						
						//循环生成多个li，左侧的内容
						
						html01 +='<li><a href="javascript:;">'+res[i].oUl01.ul[j]+'</a></li>';
					}
					
					//将生成的li放到ul中
					
					html02 +='<div class="oUl01"><h3 style="background:url('+res[i].oUl01.url+') no-repeat left center;background-size:20px;"><a href="javascript">'+res[i].oUl01.U3_01+'</a></h3><ul >'+html01+'</ul></div>';
					
					//console.log(html02);
					//第2个循环，将oUl01_01中的内容获取
					for(var k=0;k<res[i].oUl01_01.U3_02.length;k++){//U3_02标题的长度
						
						//循环生成多个h3，右侧的内容
						
						html06 ='<h3><a href="javascript:;">'+res[i].oUl01_01.U3_02[k]+'</a></h3>';
						
						//生成和h3对应的li的内容
						for(var h =0;h<res[i].oUl01_01.ul[k].length;h++){
							
							html03 +='<li><a href="javascript:;">'+res[i].oUl01_01.ul[k][h]+'</a></li>';
						
						}
						//将h3和li放到一起
						
						
						html07 += '<div >'+html06+'<ul >'+html03+'</ul></div>';
						 html03 = "";
					}
					
					//console.log(html03);
					html04 +='<div class="oUl01_01">'+html07+'</div>';
					
					html05 +='<li>'+html02+html04+'</li>';
//					console.log(html05);
				}
				//console.log(html05);
				
				//将生成的内容放到li并插入到category_content中
				
				$(".category_content").append(html05);
				
//鼠标划过背景变色隐藏的右侧菜单显示
		
				$(".category_content").children().mouseenter(function(){
					
					//console.log($(".category_content").children());

					$(this).css("background","#fff");
					
					console.log($(".oUl01").length);
					
					console.log($(this).index());
					
					$(".oUl01_01").css("display","none");
					
					$(".oUl01_01").eq($(this).index()).css("display","block");
				})
			
//鼠标划出全部隐藏
				
				$(".category_content").children().mouseleave(function(){
					
					$(this).css("background","none");
					
					$(".oUl01_01").eq($(this).index()).css("display","none");
		
				})
			
				
			}
		})
		

		
	}
	
	topNav_menu_index();
	
	//banner上面nav line跟随鼠标移动
	
	function line_move(){
		
		$(".other_category").children().has("a").mouseenter(function(){
			
			//console.log(1);//测试通过
			
			//鼠标滑过line_move显示出来
			
			$(".line_move").css("display","block");
			//定义变量left
			
			var left = $(this).index()*90+"px";
			//line_move跟随鼠标移动
			
			$(".other_category").find(".line_move").stop().animate({
				"left":left
			})
		})
		
		$(".other_category").children().has("a").mouseleave(function(){
			
			//鼠标移开line_move消失
			
			$(".line_move").css("display","none");
		})
	}
	line_move();
	
	//banner开始
	function banner(){

			//调用ajax,生成banner
			
			$.ajax({
				url:"data/banner.json",
				type:"GET",
				success:function(res){
					//console.log(res);//获取json数据成功
					var html="";
//					var htmlBtn ="";
					for(var i=0;i<res.length;i++){
						html    +='<a href="javascript:;"><div style="background:'+res[i].bg+' url('+res[i].url+') no-repeat center top"></div></a>';
//						htmlBtn +='<li></li>';
					}
					$(".banner").append(html);
//					$(".banner_btn").append(htmlBtn);
//					$(".banner_btn").children().eq(0).addClass("activeBtn");
					$(".banner").find("div").eq(0).css("opacity","1");
				}
			})
			//动态加载banner	
			var timer,index=0;
			
			function autoplay(){
				
				clearTimeout(timer);//清除定时器
				
				timer=setInterval(function(){
					
					$(".banner").find("div").eq(index).stop().animate({
						
						"opacity":"0"
						
					},1000)//将第一张图片透明度改为0
					
					$(".banner_btn").children().eq(index).removeClass();//移除按钮红色显示
					
					if(index==$(".banner").find("div").length-1){
						
						index=0;
						
						$(".banner").find("div").eq(index).stop().animate({
							
						"opacity":"1"
						
					},1000)
						
						$(".banner_btn").children().eq(index).addClass("activeBtn");//添加红色按钮
						
					}else{
						
						index++;
						
					}
					//console.log(index);
					
					$(".banner").find("div").eq(index).stop().animate({
						
						"opacity":"1"
						
					},1000)
					
					$(".banner_btn").children().eq(index).addClass("activeBtn");//添加红色按钮
					
//					$(".banner").find("div").eq(index+1).fadeIn().siblings().fadeOut();

				},3000)
				
				
			}
			
			autoplay();
			
			//按钮滑过换图
			//console.log($(".banner_btn").find("li"));
			
			$(".banner_btn").find("li").mouseover(function(){
				
				clearTimeout(timer);
			
				//console.log(1);//测试通过

				$(".banner_btn").children().eq($(this).index()).addClass("activeBtn").siblings().removeClass();//添加红色按钮
				
				index = $(this).index();
				
				
				$(".banner").find("div").css("opacity","0");
				$(".banner").find("div").eq(index).css("opacity","1");
				console.log($(".banner").find("div").length);
				
				
				autoplay();
				
			})
	}

	banner();
	
	
	
})
}