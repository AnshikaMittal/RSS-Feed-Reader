var feeds = [];
	
angular.module('RSSfeedModule', ['ngResource'])
	.factory('Loader', function ($resource) {
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		});
	})
	.service('List_of_feeds', function ($rootScope, Loader) {
		this.get = function() {
			var feedSources = 
				{title: 'reddit: the front page of the internet', url: 'https://www.reddit.com/.rss'} ;
				
			
			if (feeds.length === 0) {
					Loader.fetch({q: feedSources.url, num: 20}, {}, function (data) {
						var feed = data.responseData.feed;
						feeds.push(feed);
					});
		
			}
			return feeds;
		};
	})
	.controller('RSSFeedCtrller', function ($scope, List_of_feeds) {
		 $scope.feeds = List_of_feeds.get();
		  //$scope.imgPath = '';
		  
		$scope.$on('List_of_feeds', function (event, data) {
			$scope.feeds = data;
			
			

        });
		
		// try for image extraction 
		/*$scope.getImage = function() {
			el = angular.element(angular.element('<div>' + feed.enteries.content + '</div>').find('img')[0]);
			$scope.imgPath = el.attr('src');
		}*/
		
	
		});
		/*.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);*/
