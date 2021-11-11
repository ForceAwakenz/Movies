import { IMovie } from "../interfaces/movie.interface";

const POSTER_NOT_FOUND_URL = 'https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png';
const POSTER_IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w342';

export class Helper {

    static emptyPosterResolver(movieList: IMovie[]): IMovie[] {
        return movieList.slice().map((movie: IMovie) => {
            movie['poster_path'] = movie['poster_path'] === null
                ? POSTER_NOT_FOUND_URL
                : POSTER_IMAGE_BASE_URL + movie['poster_path'];
            return movie;
        });
    }
}