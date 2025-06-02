import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home() {
    //searchQuery is the current state value, setSearchQuery is the function to update the state
    const [searchQuery,setSearchQuery] = useState(""); 

    const movies = [
        {id:1, title: "John Wick", release_date:"2018"},
        {id:2, title: "Terminator", release_date:"2020"},
        {id:3, title: "Inception", release_date:"2022"},
        {id:4, title: "John Wick 4", release_date:"2024"},
    ];
    
    const handleSearch = (e) => { // e is the event object that is passed automatically 
        e.preventDefault() // Prevents Default behaviour which refreshs the page after pressing the search button
        alert(searchQuery)
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
            <div className="movies-grid">
                {movies.map((movie) =>movie.title.toLowerCase().startsWith(searchQuery) &&( // using conditional rendering with && which returns the second part only if the first aprt is truthy
                <MovieCard movie = {movie} key = {movie.id}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default Home //We do this export in order to use the file in other files in the project