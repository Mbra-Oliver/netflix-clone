export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTk0M2MyYmRkMTUyZGQwMWY5Yzk3NDIxZDUxOTI4NCIsInN1YiI6IjY2NDkyNjAzYTBmNzE0NGU0NDkyNWM0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OyAVcUzFenbcJhK0kHwo4R0WyjLAKswIzPp9_CIU9WI";

const API_KEY = "0a943c2bdd152dd01f9c97421d519284";

const appMovieRequest = {
  fetchPopularMovies: `popular?api_key=${API_KEY}&language=en-US&page=1`,
  upcomingMovies: `upcoming?api_key=${API_KEY}&language=en-US&page=1`,

  nowPlayingMovies: `now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpComingMovies: `upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default appMovieRequest;
