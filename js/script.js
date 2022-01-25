let numberOfFilms = window.prompt('Сколько фильмов Вы уже посмотрели?');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false,
};
let lastMovie = prompt('Один из последних просмотренных фильмов?');
let review = prompt('Оцените его от 1 до 10');

personalMovieDB.movies[lastMovie] = review;
console.log(personalMovieDB.movies);