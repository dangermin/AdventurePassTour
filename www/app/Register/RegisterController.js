angular.module('starter')

// LOGIN PAGE CONTROLLER
.controller('RegisterController', function($scope, $ionicModal, IonicLogin, $ionicLoading, $state, $cordovaOauth, $ionicPopup, $timeout) {

    $scope.data = {};

    //tell modal how to be
    $ionicModal.fromTemplateUrl('templates/profileModal.html', {
        scope: $scope
    }).then(function(profileModal) {
        $scope.profileModal = profileModal;
    });

    // REMOVE THE USER LOGIN INFORMATION WHEN RETURNING TO LOGIN SCREEN
    $scope.data = {};

    // SIGNUP FUNCTION
    $scope.signUp = function() {
        var tourUserSchema = Parse.Object.extend('TourUser');

        var tourUser = new tourUserSchema();

        tourUser.set('FirstName', $scope.data.first);
        tourUser.set('LastName', $scope.data.last);
        tourUser.set('EmailAddress', $scope.data.email);


        tourUser.save();


        Parse.User.logIn("D@d.com", "d123", {
            success: function(user) {
                $scope.profileModal.hide();
                $state.go('splash');
                Parse.Cloud.run('requestMail', $scope.data, {
                    success: function(data) {
                        console.log(data);
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });
            },
            error: function(user, error) {
                $scope.profileModal.hide();
                $ionicPopup.alert({
                    title: 'Login',
                    template: 'Wrong User or Password'
                });
            }
        });
    }

    $scope.comingSoon = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Coming Soon'
        });
        alertPopup.then(function(res) {
            console.log('Coming Soon');
        });
        $timeout(function() {
            alertPopup.close();
        }, 3000);
    }

})
