var MovieView = {
  renderList: function ($element, movie) {
    $element.append("<li><a href='#ku-page-movie-detail'><img src='"
        + movie.img+ "'>" + movie.name + "<br> " + movie.desription +" </a></li>");
  }
};