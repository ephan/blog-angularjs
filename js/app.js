'use strict';

// Declare app level module which depends on filters, and services
angular.module('blog', [ 'ngRoute', 'blog.services', 'blog.filters', 'blog.directives', 'blog.controllers']).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
		//configuring the route -> template/controller mappings
        $routeProvider.when('/post-list', {templateUrl: 'partials/post-list.html', controller: 'PostListCtrl'});
        $routeProvider.when('/post/:id', {templateUrl: 'partials/post.html', controller: 'PostSingleCtrl'});
        $routeProvider.when('/post-edit/:id', {templateUrl: 'partials/post-edit.html', controller: 'PostEditCtrl'});
        $routeProvider.when('/post-add', {templateUrl: 'partials/post-add.html', controller: 'PostAddCtrl'});
        $routeProvider.otherwise({redirectTo: '/post-list'});

		//modifying $httpProvider because by default Angular sends POSTs in json blobs rather than POST params
		$httpProvider.defaults.transformRequest = function(data){
		        if (data === undefined) {
		            return data;
		        }
		        return $.param(data);
		    }
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }]);
