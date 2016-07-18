(function(){
    // var moment = require('moment');
    var app = angular.module('redditApp', []);

    app.controller("PostController", function($scope){
        $scope.view = {};
        $scope.newPost = {};
        $scope.newComment = {};
        $scope.comments = [];
        $scope.view.posts = [
           {
             postTitle: "I love Pickle",
             author: "Moxxi",
             postUrl: "http://kingofwallpapers.com/images/images-169.jpg",
             postTxt: "Derpy derpy do",
             date: moment().subtract(2, 'days').calendar(),
             comments: [
                 {
                     author: "Pickle",
                     commentTxt: "you are a derp",
                     date: moment().subtract(1, 'day').calendar()
                 },
                 {
                     author: "Hootchie",
                     commentTxt: "Moxxi is weird",
                     date: moment().calendar()
                 }
             ],
             upvote: 2,
             downvote: 0
         },
         {
           postTitle: "I love Moxxi",
           author: "Pickle",
           postUrl: "http://www3.imperial.ac.uk/newseventsimages?p_image_type=mainnews2012&p_image_id=31831",
           postTxt: "Pickle pickle pickle!",
           date: moment().subtract(5, 'days').calendar(),
           comments: [
               {
                   author: "Moxxi",
                   commentTxt: "you are a derp",
                   date: moment().subtract(1, 'day').calendar()
               },
               {
                   author: "Hootchie",
                   commentTxt: "Pickle is weird",
                   date: moment().calendar()
               }
           ],
           upvote: 2,
           downvote: 0
         }
         ];

        $scope.addPost = function(newPost){
            $scope.newPost = {};
            console.log(newPost);
            newPost.date = moment().format('dddd, MMMM DD, YYYY');
            newPost.upvote = 0;
            newPost.downvote = 0;
            $scope.view.posts.push(newPost);
            $scope.show=!$scope.show;
            console.log($scope.view.posts);
        }

        $scope.addComment = function(post){
            var newComment = {};

            newComment.date = moment().format('dddd, MMMM DD, YYYY');
            newComment.author = $scope.newComment.author;
            newComment.commentTxt = $scope.newComment.commentTxt;

            post.comments.push(newComment);
            $scope.showCommentForm=!$scope.showCommentForm;
        }

        $scope.viewComments = function(post) {
            console.log('viewComments');
            $scope.showComments=!$scope.showComments;
        }

        $scope.upvotePost = function(post) {
            post.upvote += 1;
        }
        $scope.downvotePost = function(post) {
            post.downvote += 1;
        }


    }); //end PostController

})(); //end anonymous function wrapper
