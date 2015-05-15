var app = angular.module('mean-movies', ['truncate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/all_movies.html',
            controller: 'MoviesCtrl',
            controllerAs: 'mv'
        })

        .when('/movie/:movieId', {

        })

        .when('/add', {
            templateUrl: 'views/add_movie.html',
            controller: 'MoviesCtrl',
            controllerAs: 'mv'
        })

        .otherwise({
            redirectTo: '/'
        })

}]);