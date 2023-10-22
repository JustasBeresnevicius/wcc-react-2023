const apiKey = 'cab2afe8b43cf5386e374c47aeef4fca';

type GetMoviesParams = {
    query: string;
}

type GetMovieParams = {
    movieId: string;
}

export type GetMoviesResponse = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type GetMovieResponse = {
    id: number,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
}

export const getMovies = async ({ query }: GetMoviesParams) => {
    const response: GetMoviesResponse[] = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    ).then((response) => response.json()).then((data) => data.results);

    return response;
};

export const getMovie = async ({ movieId }: GetMovieParams) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    const responseJson: GetMovieResponse = await response.json();

    return responseJson;
};
