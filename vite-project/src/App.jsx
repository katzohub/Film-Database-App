import GeneralSlider from "./components/GeneralSlider";
import NavBar from "./components/NavBar";
import GoFilm from "./components/GoFilm";
import Films from "./components/Films";
import TopTen from "./components/TopTen";
import WatchList from "./components/WatchList";
import Footer from "./components/Footer";
import { useState } from 'react';


const App = () => {
  const [currentComponent, setCurrentComponent] = useState('GeneralSlider');
  const [watchList, setWatchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode,setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  console.log(darkMode);

  return (
    <div className='primary-container'
    style={{ backgroundColor: darkMode ? '' : '#dddddd' }}
    >

      <NavBar 
      setCurrentComponent={setCurrentComponent} 
      setSearchTerm={setSearchTerm} 
      toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}
      />
      {currentComponent === 'GeneralSlider' && (
        <>
          <GeneralSlider 
          darkMode={darkMode}
          />
          <GoFilm />
          <TopTen 
          title={'TOP 10 IMDB'} 
          darkMode={darkMode}
          />
          <TopTen title={'TOP 10 FANS FAVORITES'} 
          darkMode={darkMode}
          />
        </>
      )}
      {currentComponent === 'Films' && <Films setWatchList={setWatchList} 
      searchTerm={searchTerm}
      darkMode={darkMode}
      />} 
      {currentComponent === 'WatchList' && <WatchList watchList={watchList} 
      setWatchList={setWatchList}
      darkMode={darkMode}
      />} 
      <Footer 
      darkMode={darkMode}
      />

    </div>
  )
}

export default App
