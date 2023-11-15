import React ,{useEffect,useState} from 'react'
import { API_KEY ,imageURL } from '../constants/constants'
import './Rowpost.css'
import axios from '../axios'
import Youtube from 'react-youtube'
function Rowpost(props) {
  const [movies, setmovies] = useState([])
  const[urlId,seturlId]=useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
console.log(response.data)
setmovies(response.data.results)
    })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const handlemovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
console.log(response.data);
if(response.data.results.length!==0){
  seturlId(response.data.results[0])
}else{
  console.log('array empty');
}
})
}

  return (
    <div className='row'>
      <h2>{props.title}</h2>
<div className='posters'>
  {movies.map((obj)=>
     <img onClick={()=>handlemovie(obj.id)}  className={props.isSmall ?'smallposter':'poster'}src={`${imageURL+obj.backdrop_path}`} alt="poster" />
  )}

</div>
{urlId  &&  <Youtube  opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default Rowpost
