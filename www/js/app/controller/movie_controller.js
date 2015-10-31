var MovieController = {
  get: function () {
    var movies = MovieModel.getMovies();
    var $element = $("#all-movies");
    $element.html = "";
    $.map(movies, function (movie) {
      MovieView.renderList($element, movie);
    });
  }
};