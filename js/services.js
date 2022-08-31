'use strict';

/* Services via ngResource - A factory which creates a resource object that lets you interact with RESTful server-side data sources. */

/*
 https://docs.angularjs.org/api/ngResource/service/$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}
 */

var services = angular.module('blog.services', ['ngResource']);

/**
 * PostsFactory 
 *
 * RESTful services that do not require an ID
 * @author eric.phan
 *
 */
services.factory('PostsFactory', function ($resource) {
    return $resource('/Blog/api/', {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        clear: { method: 'DELETE' }
    })
});

/**
 * PostFactory 
 *
 * RESTful services that require an ID
 * @author eric.phan
 *
 */
services.factory('PostFactory', function ($resource) {
    return $resource('/Blog/api/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'POST', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
