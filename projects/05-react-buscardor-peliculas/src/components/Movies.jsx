export function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movies => (
                    <li className="movie" key={movies.iD}>
                        <h3>{movies.title}</h3>
                        <p>{movies.year}</p>
                        <img className="img" src={movies.poster} alt={movies.title} />
                    </li>
                ))
            }
        </ul>)
}

export function NoMoviesResults() {
    return (
        <p>No se encontraron resultados para esta peli</p>

    )
}

export function Movies({ movies }) {

    const hasmovies = movies?.length > 0


    return (
        hasmovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}