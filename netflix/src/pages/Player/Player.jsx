import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: '',
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjQwMWQ3NTNmYWI0MWZkOGEwYTMyZDZjODI5NzhiYyIsIm5iZiI6MTc1NTg3Mzk2Mi4xNzEsInN1YiI6IjY4YTg4MmFhN2UwNjQ3YTU4Y2VkMTllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.blOGUTHH0N5lRaTBxreuobcgeS00FHB33r_ZNZiKGZI'
        }
        };
        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
        },[])

  return (
    <div className="player">
        <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-2)}/>
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameborder="0" allowfullscreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player