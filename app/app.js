var ejercicioTwitter = angular.module('ejercicioTwitter',[]);
ejercicioTwitter.controller('Main',function($scope){
    var maxChars = 140;
    var photoChars = 23;

    $scope.text = '';
    $scope.isPhoto = false;

    $scope.getChars = function(){
        var maxCharsRecalculated = $scope.isPhoto ? maxChars-photoChars : maxChars;
        return maxCharsRecalculated - $scope.text.length;
    }

    $scope.getPhotoText = function(){
        return $scope.isPhoto ? 'Foto agregada' : 'Agregar Foto';
    }
});
