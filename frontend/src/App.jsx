import './css/App.css'
import Home from './pages/home';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import Favourites from './pages/Favorites';
import { Routes, Route} from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';


function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favourites' element={<Favourites/>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

//This a component, it can be used inside of various components
// function Text({text}) { //{text} is called a prop, it a variable that be passed dynamically to a component 
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   )
// }

export default App
