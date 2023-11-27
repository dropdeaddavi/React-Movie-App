
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

// APIKey = 4b3db61

const API_Url = 'http://www.omdbapi.com?apikey=4b3db61';
const movie1 = {
  "Title": "Superman II",
  "Year": "1980",
  "imdbID": "tt0081573",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDQzNjQwZjYtNjUzOS00MzAzLTg5NDYtN2MyNjVlYjhhYWFlXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_Url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Movies"R"Us</h1>
      
      <div className='search'>
        <input 
        placeholder='Search for movies' 
        value='Superman'
        onChange={() => {

        }}/>
        <img 
        src={SearchIcon}
        alt='search'
        onClick={() => {

        }}/>
      </div>

      {
        movies?.length > 0 
          ? (
            <div className='container'>
              {movies.map((movie) =>{
                return <MovieCard movie={movie}></MovieCard>
              })}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movie</h2>
            </div>
          )
      } 
    </div>
  );
}

export default App;
