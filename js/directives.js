'use strict';

/* Directives - markers on a DOM element (such as an attribute, element name, comment or CSS class) 
 * that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform 
 * the DOM element and its children 
 */

angular.module('blog.directives', []).
/**
 * singlePosting directive 
 *
 * Creates a simple directive element with a templateUrl
 * @author eric.phan
 *
 */
	directive('singlePosting', function() {
		return {
		        restrict: 'E',
				templateUrl: '/app/templates/single-posting.html',
		        link: function(scope, element, attrs) {
	   		}
		}
	}).
	directive('detailedPostList', function() {
		return {
		        restrict: 'E',
				templateUrl: '/app/templates/detailed-post-list.html',
		        link: function(scope, element, attrs) {
		    		}
			}
		 }).
	directive('pastPostLinks', function() {
		return {
		        restrict: 'E',
				templateUrl: '/app/templates/past-post-links.html',
		        link: function(scope, element, attrs) {
		    		}
			}
		 }).
		
	// this directive is shared on the add and edit views - only the corresponding submit buttons are transcluded
	directive('postFormFields', function() {
		return {
		        restrict: 'E',
				transclude: true,
				templateUrl: '/app/templates/post-form-fields.html',
		        link: function(scope, element, attrs) {
		    		}
			}
		 });