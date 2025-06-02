import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import { getPopularMovies,searchMovies } from "../services/api";
import '../css/Home.css'

function Home() {
    //searchQuery is the current state value, setSearchQuery is the function to update the state
    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]); //state for the movies that are fetched.
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => { //Use effect allows us to run this function the first time the component is rendered
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()

    },[])

    const handleSearch = async (e) => { // e is the event object that is passed automatically 
        e.preventDefault() // Prevents Default behaviour which refreshs the page after pressing the search button
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err){
            console.log(err)
            setError("Failed to search for movies")
        } finally{
            setLoading(false)
        }
    }

    return(
        <div className="home">
            <form action="" onSubmit={handleSearch} className="search-form">
                <input type="text" 
                    placeholder= "Search For Movies... " 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} //e is the event object that is passed automatically
                />
                <button type="submit" className="search-button">Search</button> 
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div>:
            <div className="movies-grid">
                {movies.map((movie) =>movie.title.toLowerCase().startsWith(searchQuery) &&( // using conditional rendering with && which returns the second part only if the first aprt is truthy
                <MovieCard movie = {movie} key = {movie.id}></MovieCard>
                ))}
            </div>}
        </div>
    );
}

export default Home //We do this export in order to use the file in other files in the project