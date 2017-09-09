
/*
$(document).ready(function(){var aChildren=$(".menuWrapper a");var gap=0;var aArray=[];for(var i=0;i<aChildren.length;i++){var aChild=aChildren[i];if(!$(aChild).hasClass('extLink')){if($(aChild).attr('rel')){var ahref=$(aChild).attr('rel');aArray.push(ahref);}}}
$(window).scroll(function(){var windowPos=$(window).scrollTop();var windowHeight=$(window).height();var docHeight=$(document).height();for(i=0;i<aArray.length;i++){var theID=aArray[i];var divPos=$("#"+theID).offset().top;var divHeight=$("#"+theID).outerHeight();if(windowPos>=(divPos-gap)&&windowPos<((divPos-gap)+divHeight)){$("a[rel='"+theID+"']").addClass("current");}else{$("a[rel='"+theID+"']").removeClass("current");}}
if(windowPos+windowHeight==docHeight){if(!$(".menuWrapper a:last-child").hasClass("current")){var navActiveCurrent=$(".current").attr("rel");$("a[rel='"+navActiveCurrent+"']").removeClass("current");$(".menuWrapper a:last-child").addClass("current");}}});$('.menuWrapper a').on("click",function(){if(!$(this).hasClass('extLink')){var href=$(this).attr("rel");var gap=0;$('html,body').animate({scrollTop:$("#"+href).offset().top-gap},1000);}});});*/


/*One page scrolling with active tab*/

$(document).ready(function(){
	
	var aChildren = $(".menuWrapper a"); // find the a children of the list items
	var gap = 0; //Navigation height
	var aArray = []; // create the empty aArray
	for (var i=0; i < aChildren.length; i++) {    
		var aChild = aChildren[i];
		if (!$(aChild).hasClass('extLink')) {
			if ($(aChild).attr('rel')) {
				var ahref = $(aChild).attr('rel');
				aArray.push(ahref);
			}
		}
	}
	
	//On Scroll - Add class active to active tab
	$(window).scroll(function(){
		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		var windowHeight = $(window).height(); // get the height of the window
		var docHeight = $(document).height();
		for(i=0;i<aArray.length;i++){
			var theID = aArray[i];
			var divPos = $("#"+theID).offset().top; // get the offset of the div from the top of page
			var divHeight = $("#"+theID).outerHeight(); // get the height of the div in question
			if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {
				$("a[rel='" + theID + "']").addClass("current");
			} else {
				$("a[rel='" + theID + "']").removeClass("current");
			}
		}	
		
		//If document has scrolled to the end. Add active class to the last navigation menu
		if(windowPos + windowHeight == docHeight) {
			if (!$(".menuWrapper a:last-child").hasClass("current")) {
				var navActiveCurrent = $(".current").attr("rel");
				$("a[rel='" + navActiveCurrent + "']").removeClass("current");
				$(".menuWrapper a:last-child").addClass("current");
			}
		}
		
	});
	
	//On Click
	$('.menuWrapper a').on("click", function(){
		if(!$(this).hasClass('extLink')) {
			var href = $(this).attr("rel");
			var gap = -2; //Navigation height
		// console.log(href+'='+$("#"+href).offset().top);
			$('html,body').animate({
				scrollTop: $("#"+href).offset().top - gap
			}, 1000);
		}
	});
});