export interface Movie {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
}

export interface MoviesApi {
    Search: Movie[];
    totalResults: number;
}
