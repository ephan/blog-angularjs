'use strict';

/* Filters - formats the value of an expression for display to the user */

angular.module('blog.filters', []).
/**
 * timestampToDate filter
 *
 * formats timestamp similar to Thu May 01 10:58:18 PDT 2014 into DD M YYYY or 01 May 2014
 * @author eric.phan
 *
 */
  filter('timestampToDate',  function() {
    return function(timestamp) {
		if (timestamp) {
			var dateArr = timestamp.split(" ");
			if (dateArr.length !== 6) 
				return timestamp;
			else 
				return dateArr[2] + " " + dateArr[1] + " " + dateArr[5];			
		} else {
			return "";
		}
    }
  });


