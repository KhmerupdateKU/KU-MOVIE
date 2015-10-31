var MovieModel = {
  movies: [],
  setMovies: function () {
    MovieModel.movies.push({
      "id": "1",
      "name": "The Last wicth Hunter",
      "img": "img/movie/3.jpg",
      "desription": "Holliwood"
    }, {
      "id": "2",
      "name": "PAN",
      "img": "img/movie/2.jpg",
      "desription": "Holliwood"
    }, {
        "id": "3",
      "name": "Ghost Dimension",
      "img": "img/movie/4.jpg",
      "desription": "Horror Movie"
    } ,
     {
         "id": "4",
      "name": "Dark Awakening",
      "img": "img/movie/5.jpg",
      "desription": "Horror Movie"
    },
     {
         "id": "5",
      "name": "Phum Ot Monus",
      "img": "img/movie/6.jpg",
      "desription": "<h5>Horror Movie</h5>"
    });
  },
  getMovies: function(){
    return MovieModel.movies;
  }
};