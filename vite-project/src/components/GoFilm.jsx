import './GoFilm.css'
import dataOne from '../dataOne'

const GoFilm = () => {
  return (
    <div className='container-mini'>
        {
            dataOne.map((datas) => {
                const {id,img,} = datas
                return <div key={id} className='my-films'>
                    <img src={img} 
                        alt=''
                        className='mini-film'
                    />
                </div>
            }
            
            )
        }
      
    </div>
  )
}

export default GoFilm
