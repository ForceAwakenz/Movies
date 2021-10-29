import { IMovie } from "./movie.interface";

export interface IMoviesListResponse {
    dates: string,
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
  };