import React, { useEffect, useState } from 'react';
import './Moviecomponant.css';
import axios from 'axios';
import Home from "../Home/Home.jsx";

const Moviecomponant = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({
        title: "",
        duration: "",
        image: "",
        releaseDate: ""
    });
    

    useEffect(() => {
        axios.get('https://luffy-server-production.up.railway.app/home')
            .then((response) => {
                setMovies(response.data);
            }).catch((error) => {
                console.log("this is error", error);
            });
    }, []);


  function Addvalue(secondloop){
   setMovie({
    title : secondloop.title,
    duration : secondloop.duration,
    image : secondloop.poster,
    releaseDate : secondloop.releaseDate
   });
};
    

    return (
        <>
            <div className='componant'>
                <div className='componant1'>
                    {Object.keys(movies).map((firstloop) => (
                        Array.isArray(movies[firstloop]) ? (
                            movies[firstloop].map((secondloop) => (
                                <img key={secondloop.id} src={secondloop.poster} alt={secondloop.title}
                                    onClick={()=>Addvalue(secondloop)} />
                            ))
                        ) : (
                            <p>this is error</p>
                        )
                    ))}
                </div>
            </div>
            
            <Home 
                value1={movie.image}
                value2={movie.title}
                value3={movie.duration}
                value4={movie.releaseDate}
            />
        </>
    );
};

export default Moviecomponant;
