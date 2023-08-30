import './TopTen.css'
import topFilmData from '../topFilmData'
import { FaPlayCircle } from "react-icons/fa";

const TopTen = ({title,darkMode}) => {
    
  const shuffledData = [...topFilmData].sort(() => Math.random() - 0.5);

  return (
    <>
      <h2 
      className='top-text'
      style={{color: darkMode ? '' : '#292524'}}
      >{title}</h2>
        <div className='container-top'>
        {
            shuffledData.map((oneFilm) => {
                const {id,title,img,trailer,ratio} = oneFilm
                return <div key={id} className='top'>
                    <img src={img} alt=''/>
                    <div className='title-mini'>{title}</div>
                    <a href={trailer}
                    style={{color: darkMode ? '' : '#658864'}}
                    ><FaPlayCircle /></a>
                    <div className='ratio-mini'>{ratio}</div>
                </div>
            })
        }
</div>
    </>
  )
}

export default TopTen
