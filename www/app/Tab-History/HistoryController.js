(function() {
    'use strict';
    angular.module('starter')

    // History CONTROLLER
    .controller('HistoryController', function($scope, $state, $ionicLoading, $ionicScrollDelegate, $timeout) {
        //IonicLogin, $ionicModal, $ionicSideMenuDelegate,
        // $scope.$on('$ionicView.enter', function(e) {

        // });

        $scope.preventFocus = function() {
            ionic.DomUtil.blurAll();
        }


        $scope.$on('$ionicView.enter', function(e) {

            $ionicLoading.show({
                template: 'Fetching History...'
            });

            $scope.requests = [];

            var query = new Parse.Query("Request");
            query.each(function(request) {
                var req = request;
                var shop = request.get('Shop');
                var shopName = shop.get('ShopName');
                var address = shop.get('Address');
                var phone = shop.get('PhoneNumber');
                var hours = shop.get('Hours');
                var completed = req.get('Completed');
                var gear = req.get('Gear');
                var date = req.get('createdAt');
                var prettyDate = moment(date).format('dddd, MMMM Do YYYY');
                var prettyTime = moment(date).format('h:mm a');


                var request = {
                    "ShopName": shopName,
                    "Address": address,
                    "Phone": phone,
                    "Hours": hours,
                    "Completed": completed,
                    "Gear": gear,
                    "Date": prettyDate,
                    "Time": prettyTime,
                    "Created": date
                };


                $scope.$apply(function() {
                    $scope.requests.push(request);
                });
                console.log($scope.requests);



                $ionicLoading.hide();
            });
        });


        $scope.ajustarScroll = function() {
            $ionicScrollDelegate.resize();
            $ionicScrollDelegate.scrollBottom(true);
        }

        $scope.sendMessage = function(message) {
            // var MessageSchema = Parse.Object.extend('MessageSchema');

            // var messages = new MessageSchema();

            // messages.set('User', Parse.User.current());
            // console.log(User);
            // // messages.set('ShopName', Parse.Shop.ShopName.value);
            // messages.set('Text', $scope.Text.value);
            // messages.set('Date', $scope.Date.value);

            // messages.save();
            // alert('All done!');


            $scope.messages.push({ user: 'Danger', avatar: 'app/img/avatar1.png', date: '10:43 AM', text: message.text });
            $scope.message.Text = '';
            $ionicScrollDelegate.scrollBottom(true);
        }

        $scope.openBrowser = function(url) {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
            $cordovaInAppBrowser.open(url, '_blank', options)

            .then(function(event) {
                // success
            })

            .catch(function(event) {
                // error
            });
        }
    })
})();
