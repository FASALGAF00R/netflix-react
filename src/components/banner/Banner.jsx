import { API_KEY ,imageURL} from '../../constants/constants'
import './Banner.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
function Banner() {
const [movie, setmovie] = useState()
  useEffect(() => {
    console.log("useeffect");
axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0]);
  setmovie(response.data.results[0])
})
  }, [])
  
  return (

    <div 
    style={{backgroundImage:`url(${movie ?imageURL+ movie.backdrop_path:''})`}}
    
    className='banner'>
        <div className='content'>
        <h1 className='title'>{movie? movie.title:""}</h1>    
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div> 
            <h1 className='description'> {movie? movie.overview:""}</h1>      
         </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
