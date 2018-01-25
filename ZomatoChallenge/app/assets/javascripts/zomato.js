function getRestaurants(theEvent){

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO RESTAURANTS API DATA
		type: "GET",
		url: `https://www.zomato.com/api/v2.1/search?apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: saveRestaurants,
		error: handleError
	});

	function saveRestaurants(response){
		var item = response;
		console.log(item.restaurants)
		item.restaurants.forEach(function(place) {

			// APPENDS EACH RESTAURANT FROM API TO HTML
			var html =` 
				<a href="/show" onclick="getReviews(${place.restaurant.R.res_id})">
					${place.restaurant.name}
				</a>
			`;
			$('.js-restaurant-name').append(html);
		});
	}

	function handleError(error){
		$(document).ready(function(){
			// DISPLAYS MESSAGE IF SERVER IS DOWN
			$( "body" ).addClass( "serverDown" );
			$( "div" ).addClass( "serverMessage" );
		});
	}	
}


