let number = true;
let iter = 1;
let postNr = 1;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

$(window).on('load', function() {
	
	// $('#exampleID').css('color', 'red').append(' doklejone');

	$('#footer').load("footer.html");

	$("#buttonWithID").hover(function(){
		$(this).css("background-color", "#142a6c");
		$(this).css("padding", "32px 64px");
		$(this).css("border-radius", "12px");
	}, function(){
		$(this).css("background-color", "#008CBA");
		$(this).css("padding", "16px 32px");
		$(this).css("border-radius", "4px");
	});

	$("button.button2").hover(function(){
		$(this).css("background-color", "black");
	}, function(){
		$(this).css("background-color", "#008CBA");
	});

	// $("#nav").hover(function(){
	// 	$("#tempDiv").addClass("navTemp");
	// 	// $("#tempDiv").replaceWith("<div id='tempDiv' class='navTemp'></div>");
	// 	$("#nav").hide();
	// }, function(){
	// 	// $("#tempDiv").replaceWith("<div id='tempDiv'></div>");
	// 	$("#tempDiv").removeClass("navTemp");
	// 	$("#nav").show();
	// });

	$('#makeFooter').click(function(){   
		$('#add_footer').load("footer.html");
	});

	$('#menuButton').click(function(){   
		$("#nav").fadeToggle(1000);
	});
	
	// $('#menuButton').click(function(){   
	// 	$("#nav").hide(1000);
	// }, function(){
	// 	$("#nav").show(1000);
	// });

	$('#changeTheme').click(function(){
		if (number){
			$("#nav").removeClass("navbar-dark");
			$("#nav").removeClass("bg-dark");
			// $("#nav").addClass("navbar-light");
			// $("#nav").addClass("bg-light");
			$(".main").css("background-color", "#16487e");
			$(".main").css("color", "white");
			$(":header").css("color", "white");
			$(".trapezoid").css("border-bottom", "100px solid black");
			$(".divAnimated").css("background-color", "white");
			$(".button2").css("background-color", "black");
			number = false;
		}
		else {
			// $("#nav").removeClass("navbar-light");
			// $("#nav").removeClass("bg-light");
			$("#nav").addClass("navbar-dark");
			$("#nav").addClass("bg-dark");
			$(".main").css("background-color", "#ddd");
			$(".main").css("color", "black");
			$(":header").css("color", "black");
			$(".trapezoid").css("border-bottom", "100px solid #16487e");
			$(".divAnimated").css("background-color", "#16487e");
			$(".button2").css("background-color", "#008CBA");
			number = true;
		}
	});

	$("#inputTrigger").keypress(function() {
  	$(".trapezoid").toggle(1000);
		$(".divAnimated").toggle(1000);
		$(":header").toggle(1000);
	});

	$("#fetch").click(function(){
		let url = `https://jsonplaceholder.typicode.com/posts/${postNr}`;
		$.getJSON(url, function(data){
			let text = "Json " + iter;
			let htmlHeader = `<h3 class='text-center display-6'> ${text} </h3>`;
			$("#display").append(htmlHeader);
		  $.each(data, function( key, val ) {
				console.log("Key: " + key);
				console.log("Value: " + val);
				let json = `<p> ${key}: ${val} </p>`;
				$("#display").append(json);
		  });
			iter ++;
		})
		postNr ++;
	});

});




