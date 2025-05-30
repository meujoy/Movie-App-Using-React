import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery,setSearchQuery] = useState()

    const movies = [
        {id:1, title: "John Wick", release_date:"2018"},
        {id:2, title: "John Wick 2", release_date:"2020"},
        {id:3, title: "John Wick 3", release_date:"2022"},
        {id:4, title: "John Wick 4", release_date:"2024"},
    ];
    
    const handleSearch = () => {

    }

    return(
        <div className="home">
            <form action="" onSubmit={handleSearch} className="search-form">
                <input type="text" 
                    placeholder= "Search For Movies... " 
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button> 
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default Home //We do this export in order to use the file in other files in the project