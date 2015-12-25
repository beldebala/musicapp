var app = angular.module('musicapp', []);

app.controller('musicController', function ($scope) {

	$scope.search = "";
	$scope.order = "title";
	$scope.selectedAlbum = null;

	$scope.selectAlbum = function (album) {
		$scope.selectedAlbum = album;
	};

	$scope.sensitiveSearch = function(album) {
		if ($scope.search) {
			return album.title.indexOf($scope.search) == 0 ;
		}
		return true;
	};

	$scope.albums = [
		   {
             title : "Nanaku Prematho",
             description : "Ntr 25",
             thumb : "../images/temper.jpg",
             musicDirector : "Devisri prasad",
             year : "2015",

           tracks : [

              {
              	track_name : "Nanna ninu chusthu",
              	description : " title song",
              	singers : " Karthik",
              	file_name : " temper.mp3"

              }
           ]
        },
         {
             title : "Temper",
             description : "Ntr 24",
             thumb : "../images/temper.jpg",
            musicDirector : "Devisri prasad",
            year : "2015",
           tracks : [

              {
              	track_name : "Nanna ninu chusthu",
              	description : " title song",
              	singers : " Karthik",
              	file_name : " nanna.mp3"

              }
           ]
        },
         {
             title : "Oosaravelli",
             description : "Ntr 23",
             thumb : "../images/temper.jpg",
             musicDirector : "Devisri prasad",
             year : "2015",
           tracks : [

              {
              	track_name : "Nanna ninu chusthu",
              	description : " title song",
              	singers : " Karthik",
              	file_name : " nanna.mp3"

              }
           ]
        }
	]
});