/*
	To run this file, just go to the root (hint: it will be the folder with package.json in it)
		and do `npm install` then after that do `node app.js`
*/

/*
	A good place to test http calls is at this website....
		https://jsonplaceholder.typicode.com/

	Not only do they have good examples you can try right on their site, but they have a good API
		that follows REST standards.
*/

/*
	Let's get our axios library that we install using npm
		`npm install --save axios`
*/
const axios = require('axios'); 

/*
	Ok, so now that we have this axios object, let's make a get request.

	Scroll down on the jsonplaceholder site until you see "Routes".

	you can see there are 5 ways to use GET.

	GET	/posts
	GET	/posts/1
	GET	/posts/1/comments
	GET	/comments?postId=1
	GET	/posts?userId=1

	Let's try the first one..

	If you click on the /posts link it takes you to...
		https://jsonplaceholder.typicode.com/posts

	This is the URL we want to make the request to.
*/

// Set our URL
var url = 'https://jsonplaceholder.typicode.com/posts';
/*
	To make a get request with axios... it's just as easy as calling the 'get' method
		on the axios object.

	Axios is a promise based library, this measn that the 'get' method returns a promise...

	This may seem confusing... for now. Let's not worry so much about promises for right now.

	Instead just trust me when I say that the invoked 'get' on the axios object allows you to
		in turn call the 'then' method.

	The 'then' method takes a callback (pssst this is just a function lol).

	When you call the 'then' method right after calling the 'get' method, this is
		called 'method chaining'

	Don't worry about how to chain the methods you write yourself, for now
		just know that axios let's you chain some methods.

	The 'then' method can also have another method called 'catch' chained after it

	The purpose of 'then' is to return a successful response object (has your data).

	The purpose of the 'catch' method is to catch any errors if they exist.

	Unsurprisingly the 'catch' method also takes a callback (still a method lol).
*/

var requestPromise = axios.get(url).then(
	// look, a callback right below
	function(response) { // you can name the argument 'response' as anything.
		console.log(response);
		console.log('SUCCESS')
	}
).catch(
	// look, another callback below
	function(error) { //you can name the argument 'error' as anything.
		console.log(error);
		console.log('NOT SUCCESS');
	}
)

