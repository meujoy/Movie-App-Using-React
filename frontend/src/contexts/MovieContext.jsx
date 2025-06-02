import { createContext, useState, useContext,useEffect } from "react";

const MovieContext = createContext() // Context is a way to share data between components without passing props manually through every level.

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites,setFavourites] = useState([])
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favourties") //getting favourites from local storage

        if (storedFavs) setFavourites(JSON.parse(storedFavs)) //Setting favourites through state function
    },[])// with this [] added, it runs the first time only

    useEffect(()=> {
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])// with favourites added, it runs every time favourite changes

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev,movie]) //update the state. prev is the current value of the state
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    } 
    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}