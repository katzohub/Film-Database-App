import { useState, useEffect } from 'react';
import './NavBar.css'
import { FaMoon,FaSun } from "react-icons/fa";

const NavBar = ({ setCurrentComponent , setSearchTerm,toggleDarkMode,darkMode}) => {
  const [isSun, setIsSun] = useState(false);

  
  useEffect(() => {
    const allBtnUpNav = document.querySelectorAll('.btn-nav')
    const toggle = document.querySelector('.toggle-theme')
    const input = document.querySelector('input')


    console.log(toggle);
    if (darkMode === false) {
      input.classList.add('input')
      toggle.classList.add('sun')
      allBtnUpNav.forEach((btn) => btn.classList.add('sun'))
    } else {
      input.classList.remove('input')
      toggle.classList.remove('sun')
      allBtnUpNav.forEach((btn) => btn.classList.remove('sun'))
    }
  }, [darkMode]);
  




  const toggleDark = () => {
    setIsSun(!isSun);
    toggleDarkMode();
  };

  return (
    <nav className="top-nav">
      <ul
            style={{borderBottom: darkMode ? '' : '2px solid #658864'
            }}
      >
        <li>
          <a href="http://localhost:5173/" className="nav-logo"
          style={{ backgroundColor: darkMode ? '' : '#658864',
          color: darkMode ? '' : '#292524'
          }}
          >
            DATA-BASE
          </a>
        </li>
        <li>
          <button className='btn-nav' 
          onClick={() => setCurrentComponent('GeneralSlider')}
          style={{color: darkMode ? '' : '#292524'}}
          >Menu</button>
        </li>
        <li>
        <input 
        type="text" 
        placeholder="Search Film" 
        onChange={e => setSearchTerm(e.target.value)} 
        style={{color: darkMode ? '' : '#292524',
        borderBottom: darkMode ? '' : '2px solid #292524'
        }}

        />

        </li>

        <li>
          <button 
          className='btn-nav' 
          onClick={() => setCurrentComponent('Films')}
          style={{color: darkMode ? '' : '#292524'}}
          >Films</button>
        </li>  
        <li>
        <button 
        className='btn-nav' 
        onClick={() => setCurrentComponent('WatchList')}
        style={{color: darkMode ? '' : '#292524'}}
        >Watch List</button>

        </li>
        <li onClick={toggleDark}
            className='toggle-theme'
            style={{color: darkMode ? '' : '#292524'
            
            }}
            
            >{isSun ? <FaSun /> : <FaMoon />}</li>
      </ul>
    </nav>
  );

};

export default NavBar;
