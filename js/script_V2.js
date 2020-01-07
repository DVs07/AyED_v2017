$(document).ready(function(){
	$(".seccionseries").hide();
	$(".seccionjuegos").hide();
	$(".seccionpeliculas").hide();
	$(".secciontecnologia").hide();
	$(".item2juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	
$(window).scroll(function() {
        if ($(this).scrollTop() >= 160) {
            $('nav').addClass('NavFijo');
			$('nav').css({"opacity":"0.95"});
			$('.navbar-inverse').css({"height":"40px"})
			$('.navbar-nav>li>a').css({"paddingTop":"15px"})
			$('a.navbar-brand').css({"paddingTop":"5px"})
			$('.navbar-nav>.active>a').css({"height":"53px"})
			$('.navbar-inverse>.navbar-nav>.open>a').css({"height":"50px"})
			$('.navbar-inverse').css({
    background: "-webkit-gradient(linear, left top, left bottom, from(#0080FF),	to(navy))" 
});
			$("#font1").css({"color":"black"})
			$("form").css({"paddingTop":"0px"})
			$("li").css({"fontSize":"16px"})
			$(".navbar-brand").css({"height":"50px"})
			$(".contenido").css({"top":"90"})
			$('.col-md-3').css({background: 
			"-webkit-gradient(linear, left top, left bottom, from(#0080FF),	to(navy))"});
			$('.col-md-9').css({background: 
			"-webkit-gradient(linear, left top, left bottom, from(#0080FF),	to(navy))"});
		/*if($(this).scrollTop() >=20){
			$(".seccionjuegos").addClass("seccionpegajosa")};*/
        }
        else {
            $('nav').removeClass('NavFijo');
			$('nav').css({"opacity":"1"});
			$('nav').css({"backgroundColor":"black","height":"60px"})
			$('.navbar-nav>li>a').css({"paddingTop":"20px"})
			$('a.navbar-brand').css({"paddingTop":"10px"})
			$('.navbar-nav>.active>a').css({"height":"60px"})
			$('.navbar-inverse').css({
    background: "-webkit-gradient(linear, left top, left bottom, from(aqua), to(#004080))" 
});
			$("#font1").css({"color":"white"})
			$("form").css({"paddingTop":"5px"})
			$("li").css({"fontSize":"16px"})
			$(".navbar-brand").css({"height":"60px"})
        }
    })
	$('#inicio').click(function(){
		$(".seccioninicio").show();
	
		$(".seccionjuegos").hide();
		$(".seccionseries").hide();
		$(".seccionpeliculas").hide();
		$(".secciontecnologia").hide();
	});
	$('#juegos').click(function(){
		$(".seccionjuegos").show();
		$(".seccioninicio").hide();
		$(".seccionseries").hide();
		$(".seccionpeliculas").hide();
		$(".secciontecnologia").hide();
		$("footer").show();
	});
	$('#series').click(function(){
		$(".seccionseries").show();
		$(".seccioninicio").hide();
		$(".seccionjuegos").hide();
		$(".seccionpeliculas").hide();
		$(".secciontecnologia").hide();
		
	});
	$('#peliculas').click(function(){
		$(".seccionpeliculas").show();
		$(".seccioninicio").hide();
		$(".seccionseries").hide();
		$(".seccionjuegos").hide();
		$(".secciontecnologia").hide();
		
	});
	$('#tecnologia').click(function(){
		$(".secciontecnologia").show();
		$(".seccioninicio").hide();
		$(".seccionseries").hide();
		$(".seccionpeliculas").hide();
		$(".seccionjuegos").hide();
		
	});
	$("a").hover(function(){
    $(this).css("color", "black");
	}, function(){
    $(this).css(
				"color","white");
});
$("#inicio").hover(function(){
    $(this).css("color", "black");
	}, function(){
    $(this).css(
				"color","white");
});
	$(".vistaprevia").mouseover(function(){
		
		$(this).css({
			backgroundColor: ""
		});
	});
	$(".vistaprevia").mouseout(function(){
		
		$(this).css({
			backgroundColor: ""
		});
	});
		
	$("img").mouseover(function(){
		$(this).css({
			opacity: "0.9",
			borderColor:"red"
		});
	});
		$("img").mouseout(function(){
		$(this).css({
			opacity: "1"
		});
	});
	$("#item1juegos").click(function(){
		$(".item1juegos").show();
		$(".item2juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item2juegos").click(function(){
		$(".item2juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item3juegos").click(function(){
		$(".item3juegos").show();
		$(".item1juegos").hide();
		$(".item2juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item4juegos").click(function(){
		$(".item4juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item2juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item5juegos").click(function(){
		$(".item5juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item2juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item6juegos").click(function(){
		$(".item6juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item2juegos").hide();
		$(".item7juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item7juegos").click(function(){
		$(".item7juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item2juegos").hide();
		$(".item8juegos").hide();
	})
	$("#item8juegos").click(function(){
		$(".item8juegos").show();
		$(".item1juegos").hide();
		$(".item3juegos").hide();
		$(".item4juegos").hide();
		$(".item5juegos").hide();
		$(".item6juegos").hide();
		$(".item7juegos").hide();
		$(".item2juegos").hide();
	})
	
	})
