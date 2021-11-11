import { IMovie } from "../interfaces/movie.interface";

const posterNotFoundUrl = 'https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png';
const posterImageBaseUrl = 'http://image.tmdb.org/t/p/w342';

export class Helper {

    static emptyPosterResolver(movieList: IMovie[]): IMovie[] {
        return movieList.slice().map((movie: IMovie) => {
            movie['poster_path'] = movie['poster_path'] === null
            ? posterNotFoundUrl
            : posterImageBaseUrl + movie['poster_path'];
            console.log(movie['poster_path'])
            return movie;
        });
    }
}