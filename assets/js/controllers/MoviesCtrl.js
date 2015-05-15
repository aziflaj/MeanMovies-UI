app.controller('MoviesCtrl', ['movies',
    function(movies) {

        var self = this;
        this.movies = movies;

        this.addMovie = function(mv) {
            movies.push({
                id: movies.length+1,
                title: mv.title,
                poster: mv.poster,
                descr: mv.descr
            });

            console.log(movies);
        };
}]);