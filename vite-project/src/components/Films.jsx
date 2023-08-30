import { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import './Films.css'

function Films({ setWatchList, searchTerm,darkMode}) {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('All');

  


  function addToWatchList(movie) {
    setWatchList(prevWatchList => {
      if (prevWatchList.some(item => item.imdbID === movie.imdbID)) {
        return prevWatchList;
      } else {
        return [...prevWatchList, movie];
      }
    });
  }

  useEffect(() => {
    async function fetchData() {
      const urls = ["http://www.omdbapi.com/?apikey=f4738d89&s=comedy", "http://www.omdbapi.com/?apikey=f4738d89&s=love","http://www.omdbapi.com/?apikey=f4738d89&s=action","http://www.omdbapi.com/?apikey=f4738d89&s=anime","http://www.omdbapi.com/?apikey=f4738d89&s=hero"];
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        setMovies(data.flatMap(item => item.Search));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);



  let filteredMovies = movies;
  if (category !== 'All') {
    filteredMovies = filteredMovies.filter(movie => movie.Title.toLowerCase().includes(category.toLowerCase()));
  }
  if (searchTerm) {
    filteredMovies = filteredMovies.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  return (
    <>
      <div className='button-search'>
        <button 
        onClick={() => setCategory('All')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}
        >All</button>
        <button 
        onClick={() => setCategory('Hero')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}
        >Hero</button>
        <button onClick={() => setCategory('Love')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}
        >Love</button>
        <button 
        onClick={() => setCategory('Anime')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}>Anime</button>
        <button 
        onClick={() => setCategory('Comedy')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}>Comedy</button>
        <button 
        onClick={() => setCategory('Action')}
        style={{ backgroundColor: darkMode ? '' : '#658864',
        color: darkMode ? '' : '#292524'
        }}>Action</button>
      </div>
      <div className="container-all-film">
        {filteredMovies.map((movie,index) => (
          <div className="all" key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <button 
            className='plus' 
            onClick={() => addToWatchList(movie)}
            style={{ 
            color: darkMode ? '' : '#658864',
            borderLeft: darkMode ? '' :'1px solid #658864',
            borderBottom: darkMode ? '' : '1px solid #658864'
            }}
            ><FaPlus/></button>

            <div className="post-text">
              <div className="title">{movie.Title}</div>
              <div className="date">{movie.Year}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Films
