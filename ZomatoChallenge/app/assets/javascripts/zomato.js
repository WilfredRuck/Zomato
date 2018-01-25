function getRestaurants(theEvent){

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO RESTAURANTS API DATA
		type: "GET",
		url: `https://www.zomato.com/api/v2.1/search?apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: showRestaurants,
		error: handleError
	});

	function showRestaurants(response){
		var item = response;
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

function getReviews(id){

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO RESTAURANT REVIEWS API DATA
		type: "GET",
		url: `https://developers.zomato.com/api/v2.1/reviews?res_id=`+ id + `&apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: showReviews,
		error: handleError
	});

	function showReviews(response) {
		console.log("success!");
	}

	function handleError(error) {
		console.log("error!");
	}
}