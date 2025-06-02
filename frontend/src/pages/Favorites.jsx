import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favourites(){
    const {favourites} = useMovieContext()

    if (favourites.length > 0) {
        return (
        <div className='favourites'>
            <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favourites.map((movie) =>(<MovieCard movie={movie} key= {movie.id}> </MovieCard>))}
            </div>    
        </div>
        );                    
    } else
        return (<div className="favourites-empty">
            <h2>No Favourites Movies yet</h2>
            <p>Start Adding Movies to your Favourites and they will appear here</p>
        </div>
        );
}

export default Favourites