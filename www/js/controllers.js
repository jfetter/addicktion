angular.module("starter")

.controller("ExampleController", function($scope, $cordovaFileTransfer, $http) {
    console.log("in Example controller")


    //$scope.image = Service[id].image
    //$scope.currentVotes = Service[id].votes
    //$scope.

    $scope.submit = function(){
        console.log("in submit function")
    //    var newPic = {}
    //    newPic.uName = $scope.userName
    //    newPic.story = $scope.userStory
    //    newPic.pic = $scope.userPic 
    // // send collected data to server
    //     $http.post("/server/dickPics")
    //         .then(function(res){
    //             console.log(res.data)
    //         })
    //         .err(function(err){
    //             console.error(err)
    //         })
    }


    $scope.vote = function(){
        DickService.DictOfDicks[thisDicksId].votes ++;
    }

    $scope.upload = function(){
// not totally sure what this does... 
//...thinkin it points to a pic in a server??
// still need to prolly make an http request though
        var options = {
            fileKey: "avatar",
            fileName: "image.png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        $cordovaFileTransfer.upload("http://192.168.56.1:1337/file/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    }
});



.service("DickService" ){

    this.DictOfDicks= {};

    // $scope.fetchDicks= function(){
    //  $http.get("/dickPics")
    //     .then((res) => {
    //         console.log(res);
    //         // create a new Dict key/ value 
    //         // where key = mongo id and value = the entire object
    //         this.DictOfDics.res.data._id= res.data; 
    //     })
    //     .error(function(err){
    //         console.error(err)
    //     })
    // }
}


.controller("graphCtrl", function($scope, $http){
    
    $scope.tabulateVotes = function(){
        //for the dics in the dictionary 
        // display a bar graph with the highest vote ocunt 
        // vote field. 
    }
})



