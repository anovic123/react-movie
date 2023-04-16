export interface initialStateType {
  moviesData: MovieTypeResult[];
  horrorMovies: MovieType[],
  comedyMovies: MovieType[],
  documentaryMovies: MovieType[],
  netflixMovies: MovieType[],
  randomMovieIndex: number;
}

export interface MovieType {
  page: number
  results: MovieTypeResult[]
  total_pages: number
  total_results: number
}

export interface MovieTypeResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
