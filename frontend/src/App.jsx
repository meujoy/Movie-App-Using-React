import './App.css'
import MovieCard from "./assets/components/MovieCard"

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ?(
        <MovieCard movie={{title: "Youssef's Film",release_date: "2024"}}></MovieCard>
      ):(
        <MovieCard movie={{title: "Joe's Film",release_date: "2023"}}></MovieCard>
      )}
    </>
  )
}

//This a component, it can be used inside of various components
// function Text({text}) { //{text} is called a prop, it a variable that be passed dinamically to a component 
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   )
// }

export default App
