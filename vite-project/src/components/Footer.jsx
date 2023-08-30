import { useEffect } from 'react';
import './Footer.css'
import { FaTwitter,FaFacebookF,FaDiscord,FaInstagram,FaLinkedinIn } from "react-icons/fa";

const Footer = ({darkMode}) => {

 

  useEffect(() => {
   
    const allBtn = document.querySelectorAll('.bottom-nav ul li a')


    if (darkMode === false) {
      allBtn.forEach((btn) => btn.classList.add('sun'))
    } else {
      allBtn.forEach((btn) => btn.classList.remove('sun'))
    }
  }, [darkMode]);

  return (
    <footer>
      <nav 
      className='bottom-nav'
      style={{borderTop: darkMode ? '' : '2px solid #658864'
            }}
      >
      <div 
      className='create'
      style={{color: darkMode ? '' : '#292524'
            }}
      >Create website TOM3K</div>
        <ul>
            <li><a 
            href="#"
            style={{color: darkMode ? '' : '#292524'
            }}
            ><FaTwitter/></a></li>
            <li><a 
            href="#"
            style={{color: darkMode ? '' : '#292524'
            }}
            ><FaFacebookF/></a></li>
            <li><a href="#"
             style={{color: darkMode ? '' : '#292524'
            }}
            ><FaDiscord/></a></li>
            <li><a href="#"
             style={{color: darkMode ? '' : '#292524'
            }}
            ><FaInstagram/></a></li>
            <li><a href="#"
             style={{color: darkMode ? '' : '#292524'
            }}
            ><FaLinkedinIn/></a></li>
        </ul>
        <div 
        className='firt-project'
        style={{color: darkMode ? '' : '#292524'
            }}
        >First Project</div>
      </nav>
    </footer>
  )
}

export default Footer
