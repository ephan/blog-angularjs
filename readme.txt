Eric Phan
May 2014

Browsers tested on: Firefox 28.0 (Mac OSX 10.9.2), Chrome Version 34.0.1847.131 (Mac OSX 10.9.2), Safari 7.0.3 (Mac OSX 10.9.2)

Libraries used - why?: 
	AngularJS (1.2.16)   
		   - to create a Single Page Application in a structured, componentized fashion. Restful APIs were consumed gracefully, dependancy injection and two-way data binding is also very useful (and difficult to implement without using a framework like Angular). Unit testing is also very easy to do using this framework - though I didn't have time to write unit tests.
	Bootstrap  - to achieve a decent look and feel without too much effort and utilising pre-built designs. Ready-to-use buttons and grid system also came in handy.
	Compass    - for cross browser compatible css, reusable mix-ins.

-------------------------------------------------

List of source code files:

/webapp
	blog.html - the main layout file for the application. Includes all of the css, javascript and has a ng-view tag for Angular's routing
	config.rb - compass config file
	readme.txt - this file
	
	/css
		screen.css - compiled css for the application (desktop view)
		/bootstap
			bootstrap-responsive.min.css - bootstraps library for responsive design (not used yet)
			bootstrap.min.css - bootstrap library css file
			
	/js
		app.js - declares the angular application, dependencies, configures the routing and app settings
		controller.js - contains all of the controller logic for each 'page' - initialises scope, models and facilitates service calls.
		directives.js - contains all of the directive logic (reusable building blocks).
		filters.js - contains all of the filters that we use to manipulate data being displayed in the view
		services.js - contains all of the CRUD services which are implemented by ngResource via factories. 
		
	/partials
	  	post-add.html    - template for the /post-add route and is tied to the PostListAdd controller
		post-edit.html   - template for the /post-edit/{id} route and is tied to the PostEditCtrl controller
		post-list.html   - template for the /post-list route and is tied to the PostListCtrl controller
		post-single.html - template for the /post/{id} route and is tied to the PostSingleCtrl controller
	
	/sass
		screen.scss - uncompiled scss for the application (desktop view)
		grid.scss - grid mix-in from bootstrap
		
	/templates
		detailed-post-list.html - template for detailedPostList directive
		past-post-links.html    - template for pastPostLinks directive
		post-form-fields.html   - template for postFormFields directive - used in both post-add.html and post-edit.html
		single-posting.html     - template for singlePosting directive

-------------------------------------------------

Objectives incomplete?: All test objectives were completed.

Notes:

- Though I didn't implement internationalization, i18n is pretty straight forward with Angular. There are modules that make it even easier than what Angular has out of the box such as (http://angular-translate.github.io/). 

- If this project grew in size, I would split each directive up into individual files and bundle the corresponding css, template and directive code into directories inside of a 'component' directory. It would be more maintainable that way. 

- I also had in mind to implement a responsive design, which would be done via adding another file 'mobile.scss' that targets a smaller browser width, and modifies the css according for a mobile friendly design.

- If this were production ready, I would look into combofying and minifying the CSS and JS. I wrote the angular controller's dependancy injection in a way that would work with minification.

- Although I don't have access to IE on my computer, I would use http://css3pie.com/ along with SCSS to fix any IE CSS issues. Angular 1.2.x supports IE8+, but IE7 and below would need special shims for directives or would need directives implemented as classes rather than elements. 
