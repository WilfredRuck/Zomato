# ZomatoChallenge
A web application built using Ruby and the Ruby On Rails Framework. This application gets restaurant data from Zomato's API and displays the restaurants information and reviews in an orderly manner. 


## Technical Specifications:

ZomatoChallenge was built using Ruby 2.3.3 and the Rails framework 5.1.4.

## Getting Up and Running:

Assuming you have the techincal specifications noted above, <b>clone or download this repo</b>.

In your console, navigate to the app's folder and run <b>bundle install</b>. Next, run <b>rails s</b> to start the server and load <b>localhost:3000</b> in your browser.


## Technical Questions:

#### How long did you spend on this technical challenge? What would you add to your solution if you had more time?

I was only able to work on this challenge for about 6-8 hours due to my busy schedule. Initially, I intended on retrieving the data from the Zomato API and then storing it into a Rails model to make less calls to the API but I ran out of time. Styling and testing was also something I desperately wanted to address.

#### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I haven't used any new features that were recently introduced in Ruby, but I did have to add the 'jquery-rails' gem to use jquery in Rails since version 5.1 doesn't depend on it anymore.

#### How would you track down a performance issue in production? Have you ever had to do this?

I always deploy my applications with Heroku which has a few graphical images that show the performance of your website. I've had to monitor a website using it once.

#### How would you improve the Zomato API that you just used?

I was expecting to find the restaurant's name in each review but it wasn't there. I would add that so that it's more evident as to which restaurant the review belongs to besides using the 'res_id'.

#### Please describe yourself using JSON.

{<br>
	"first_name": "Wilfred",<br>
	"last_name": "Ruck",<br>
	"age": 26,<br>
	"interests": ["Music", "Running","Writing","Photography"],<br>
	"personality": ["Adaptable","Adventurous","Punctual","Humorous","Organized"]<br>
}
