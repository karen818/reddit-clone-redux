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
             showCommentForm: false,
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
             upvote: 4,
             downvote: 0
         },
         {
           postTitle: "I love Moxxi",
           author: "Pickle",
           postUrl: "http://www3.imperial.ac.uk/newseventsimages?p_image_type=mainnews2012&p_image_id=31831",
           postTxt: "Pickle pickle pickle!",
           date: moment().subtract(5, 'days').calendar(),
           showCommentForm: false,
           comments: [
               {
                   author: "Moxxi",
                   commentTxt: "No, *you* are a derp",
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
       },
         {
           postTitle: "Please don't eat me, Mr. Shark",
           author: "A cute baby seal",
           postUrl: "http://static1.businessinsider.com/image/56cdeac86e97c625048b95af/17-of-the-most-jaw-dropping-images-in-the-running-for-the-worlds-largest-photography-contest.jpg",
           postTxt: "I want to lllliiiiivvvvveeee!",
           date: moment().subtract(4, 'days').calendar(),
           showCommentForm: false,
           comments: [
               {
                   author: "Mr. Shark",
                   commentTxt: "I just want to give you a kiss...with my teeth. MUHAHAHAHAHAHA!",
                   date: moment().subtract(1, 'day').calendar()
               }
           ],
           upvote: 0,
           downvote: 10
         }
         ];

        $scope.addPost = function(newPost){
            $scope.newPost = {};
            newPost.date = moment().format('dddd, MMMM DD, YYYY');
            newPost.comments = [];
            newPost.upvote = 0;
            newPost.downvote = 0;
            newPost.showCommentForm = false;
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
        }

        $scope.showCommentsForm = function(post) {
            post.showCommentForm=!post.showCommentForm;
        }

        $scope.viewComments = function(post) {
            console.log('viewComments');
            post.showComments=!post.showComments;
        }

        $scope.upvotePost = function(post) {
            post.upvote += 1;
        }
        $scope.downvotePost = function(post) {
            post.downvote += 1;
        }


    }); //end PostController

})(); //end anonymous function wrapper
