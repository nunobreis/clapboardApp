import axios from 'axios';

const API_KEY = 'b2a1db157d5c38da50264ca60afa6273';

// https://api.themoviedb.org/3/search/movie?api_key=b2a1db157d5c38da50264ca60afa6273&query=Pulp+Fiction

const rootUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (movie) => {
  let arr = [];
  const splitWords = movie.split(" ");
  arr.push(splitWords);
  const query = arr.join('+')
  const url = `${rootUrl}${query}`;

  const request = axios.get(url);

  console.log('Request: ', request);
  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

const userInput = (string) => {
  const query = string.trim().toLowerCase().join(' + ');
  return query;
  console.log(query);
};
