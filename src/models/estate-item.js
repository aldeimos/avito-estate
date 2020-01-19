export default class EstateItem {
  constructor(data) {
    // опишем входящий объект
  }

  static parseMovie(data) {
    return new Movie(data);
  }
  static parseMovies(data) {
    return data.map(Movie.parseMovie);
  }

}