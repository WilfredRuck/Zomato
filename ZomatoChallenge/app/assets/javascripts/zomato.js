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
				<div class="restaurant"> 
					<a href="/show" onclick="getInfoAndReviews(${place.restaurant.R.res_id})">
						${place.restaurant.name}
					</a>
				</div>
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

function getInfoAndReviews(res_id){

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO RESTAURANT INFO API DATA
		type: "GET",
		url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}&apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: showInfo,
		error: handleError1
	});

	function showInfo(response) {
		console.log("success!");
			// APPENDS EACH RESTAURANT INFO FROM API TO HTML
			var html =`
				<h1> ${response.name} </h1>
				<p> Address - ${response.location.address} </p>
				<p> Cuisine(s) - ${response.cuisines} </p>
				<p> Price Range - ${response.price_range} </p>
				<p> Overall Rating - ${response.user_rating.aggregate_rating} </p>
			`;
			$('.js-restaurant-info').append(html);
	}

	function handleError1(error) {
		$(document).ready(function(){
			// DISPLAYS MESSAGE IF SERVER IS DOWN
			$( "body" ).addClass( "serverDown" );
			$( "div" ).addClass( "serverMessage" );
		});
	}

	$.ajax({
		// AJAX REQUEST FOR THE ZOMATO RESTAURANT REVIEWS API DATA
		type: "GET",
		url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${res_id}&apikey=e94b4a66e7b94a94dd2fca0251fcd923`,
		success: showReviews,
		error: handleError2
	});

	function showReviews(response) {
		console.log("success!");
		var review = response;
		var count = review.length
		review.user_reviews.forEach(function(x) {
		console.log(x);
			// APPENDS EACH RESTAURANT FROM API TO HTML
			var html =`
				<div class="review">
					<div> User - ${x.review.user.name} </div>
					<div> Rating - ${x.review.rating} </div>
					<div> Review Title - ${x.review.rating_text} </div>
					<div> Review - ${x.review.review_text} </div>
					<div> Time - ${x.review.review_time_friendly} </div>
				</div>
			`;
			$('.js-review-text').append(html);
		});
	}

	function handleError2(error) {
		$(document).ready(function(){
			// DISPLAYS MESSAGE IF SERVER IS DOWN
			$( "body" ).addClass( "serverDown" );
			$( "div" ).addClass( "serverMessage" );
		});
	}
}