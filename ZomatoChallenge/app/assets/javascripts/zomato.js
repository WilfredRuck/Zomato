function getRestaurants (theEvent){

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO API DATA
		type: "GET",
		url: `https://www.zomato.com/api/v2.1/search?apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: showRestaurants,
		error: handleError
	});

	function showRestaurants(response){
		console.log("thumbs up");
		var item = response;
		console.log(item);
		item.restaurants.forEach(function(place) { 
			console.log(place)
			// APPENDS EACH RESTAURANT FROM API TO HTML
			var html =` 
				<div> ${place.restaurant.name} </div> 
			`;
			$('.js-restaurant-name').append(html);
		});
	}

	function handleError(error){
		console.log("thumbs down");
		console.log(error.responseText);
		$(document).ready(function(){
			// DISPLAYS MESSAGE IF SERVER IS DOWN
			$( "body" ).addClass( "serverDown" );
			$( "div" ).addClass( "serverMessage" );
		});
	}	
}