'use strict';

/* Controllers -  a JavaScript constructor function that is used to augment the Angular Scope */

var app = angular.module('blog.controllers', []);


// Clear browser cache 
app.run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


/**
 * PostListCtrl
 *
 * Handles all of the Post Listings' dependancy injections, view/scope interactions
 * @author eric.phan
 *
 */

app.controller('PostListCtrl', ['$scope', 'PostsFactory', 'PostFactory', '$location',
    function ($scope, PostsFactory, PostFactory, $location) {

        // callback for ng-click 'editPost':
        $scope.editPost = function(postId) {
            $location.path('/post-edit/' + postId);
        };

        // callback for ng-click 'deletePost':
        $scope.deletePost = function(postId) {
            PostFactory.delete({ id: postId }, function(res) {
	            $location.path('/post-list/');
			}, function(err) {
				$scope.deleteError = true;
			});
        };

        // callback for ng-click 'createPost':
        $scope.createNewPost = function() {
            $location.path('/post-add');
        };

        // callback for ng-click 'clearAllPosts':
		/* The server should require authentication and limit deletion to just posts by the current 
			user or in the case of an administrator, to posts by a user with a given user ID =) */
        $scope.clearAllPosts = function() {
            PostsFactory.clear(function(res) {
				//update the 'posts' scope model
				$scope.posts = [];
			}, function(err) {
				$scope.deleteError = true;
			});
        };

		// get all posts
        PostsFactory.query( function(response) {
			if (response && response.blog && response.blog.posts)
				$scope.posts = response.blog.posts;
	    }, function(error) {
			// it would be nice if all of the backend error responses
			// could be json data to display error messages/codes
			$scope.queryError = true;
		});
	    
    }]);


/**
 * PostSingleCtrl
 *
 * Handles all of the Single Post's dependancy injections, view/scope interactions
 * @author eric.phan
 *
 */

app.controller('PostSingleCtrl', ['$scope', '$routeParams', 'PostFactory', '$location',
    function ($scope, $routeParams, PostFactory, $location) {

        // callback for ng-click 'editPost':
        $scope.editPost = function(postId) {
            $location.path('/post-edit/' + postId);
        };

        // callback for ng-click 'deletePost':
        $scope.deletePost = function(postId) {
            PostFactory.delete({ id: postId }, function(res) {
	            $location.path('/post-list/');	
			}, function(err) {
				$scope.deleteError = true;
			});
        };

        // callback for ng-click 'showList':
		$scope.showList = function() {
			$location.path('/post-list/');
		};
		
		// initialize $scope.post data
		PostFactory.show({id: $routeParams.id}, function(response) {
			if (response && response.post)
				$scope.post = response.post;
		}, function(error) {
			$scope.showError = true;
		});

    }]);


/**
 * PostEditCtrl
 *
 * Handles all of the Edit Posting's dependancy injections, view/scope interactions
 * @author eric.phan
 *
 */

app.controller('PostEditCtrl', ['$scope', '$routeParams', 'PostFactory', '$location',
    function($scope, $routeParams, PostFactory, $location) {

		// initialize $scope.post data
		PostFactory.show({id: $routeParams.id}, function(response) {
			if (response && response.post)
				$scope.post = response.post;
		}, function(error) {
			$scope.showError = true;
		});

        // callback for ng-click 'cancel':
        $scope.cancel = function() {
            $location.path('/post-list');
        };

        // callback for ng-click 'updatePost':
        $scope.updatePost = function() {
			// I think that the timestamp should be updated on the server side upon update...
			PostFactory.update($scope.post, function(res) {
				$location.path('/post-list');
			}, function(error) { 
				$scope.editError = true;
			});
        };

    }]);


/**
 * PostAddCtrl
 *
 * Handles all of the Add Posting's dependancy injections, view/scope interactions
 * @author eric.phan
 *
 */

app.controller('PostAddCtrl', ['$scope', 'PostsFactory', '$location',
    function ($scope, PostsFactory, $location) {

        // callback for ng-click 'createNewPost':
        $scope.createNewPost = function() {
			PostsFactory.create($scope.post, function(res) {
				$location.path('/post-list');
			}, function(error) { 
				$scope.createError = true;
			});
        }

        // callback for ng-click 'cancel':
        $scope.cancel = function() {
            $location.path('/post-list');
        };

    }]);