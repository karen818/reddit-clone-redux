(function(){
    // var moment = require('moment');
    var app = angular.module('redditApp', []);

    app.controller("PostController", function($scope){
        $scope.view = {};
        $scope.newPost = {};
        $scope.view.posts = [
           {
             postTitle: "I love Pickle",
             author: "PokeStuff",
             postUrl: "http://kingofwallpapers.com/images/images-169.jpg",
             postTxt: "Derpy derpy do",
             date: moment().subtract(2, 'days').calendar(),

           }
         ];

        $scope.addPost = function(post){
            post.date = moment().format('dddd, MMMM Do, YYYY');
            $scope.view.posts.push(post);
            $scope.newPost = {};
            $scope.show=!$scope.show;
            // $scope.postForm.$setUntouched();
            console.log($scope.view.posts);
        }



    }); //end PostController

})(); //end anonymous function wrapper
