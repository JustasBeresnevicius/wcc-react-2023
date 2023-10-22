const apiKey = 'cab2afe8b43cf5386e374c47aeef4fca';

type GetMoviesParams = {
    query: string;
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

export const getMovies = async ({ query }: GetMoviesParams) => {
    const response: GetMoviesResponse[] = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    ).then((response) => response.json()).then((data) => data.results);

    return response;

    // const response2 = await fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    // );

    // const response2Json = await response2.json();

    // return response2Json.results;
};

export const getGenres = () => {
    return fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
};
