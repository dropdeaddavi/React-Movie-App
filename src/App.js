
import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg';

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
  const searchMovies = async (title) => {
    const response = await fetch(`${API_Url}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('superman');
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
      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>
              {movie1.Title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
