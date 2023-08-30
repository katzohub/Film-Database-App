
import './WatchList.css'
import { FaTrashAlt } from "react-icons/fa";

const WatchList = ({ watchList, setWatchList,darkMode }) => {
  function removeFromWatchList(movie) {
    setWatchList(prevWatchList => prevWatchList.filter(item => item.imdbID !== movie.imdbID));
  }


  return (
    <div>
      <h2 
      className='watchlist-title'
      style={{color: darkMode ? '' : '#292524',
            }}
      >Watch List</h2>
      
      <div className="container-all-film-list">
        {watchList.map(movie => (
          <div className="all list-all" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <button 

            className='plus' 
            onClick={() => removeFromWatchList(movie)}
            style={{ 
            color: darkMode ? '' : '#658864',
            borderLeft: darkMode ? '' :'1px solid #658864',
            borderBottom: darkMode ? '' :'1px solid #658864'
            }}
            ><FaTrashAlt/></button>
            <div className="post-text">
              <div className="title">{movie.Title}</div>
              <div className="date">{movie.Year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
