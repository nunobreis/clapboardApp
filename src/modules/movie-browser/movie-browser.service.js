const API_KEY = 'b2a1db157d5c38da50264ca60afa6273';
// const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${API_KEY}`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`)
  }
  return baseUrl;
}

export const getTopMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/top_rated', {
    page
  });
  return fetch(fullUrl);
}

export const searchMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
}

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
}
