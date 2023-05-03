/*
Name: Taweepong Hirikul
StudentID: 300356615
*/
$(document).ready(function(){
//apply to each <li> element
	$("#carousel ul").each(function(){
		//use setInterval Function
		setInterval(function(){
		//reference images container (div)
		//animate images
			var itemWidth = $("#carousel").width()*.25;
			$("#carousel ul").animate({marginLeft:-itemWidth},500,function(){
				
				//advance to the last <li> and after that go back to
				//the first <li>
				$(this).find("li:last").after($(this).find("li:first"));
				
				//reset left margin to zero
				$(this).css({marginLeft:0});
				
			});	//end of animate() function
		
		},2000); //delay execution of function by 5 sec
		
	});
}); 