
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import './Cards.css'
const Movies = () => {
    var [Movie,setMovie]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/viewmovie")
        .then(response =>{
            setMovie(response.data)
        })
        .catch(err=>console.log(err))
    },[])




   return (
    <div>
       <div className='bk'>
            <div className="wrapper">
                {Movie.map((value,index)=>{
                            return(
                          <div className="card" key={index}>
                            <img src={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`} alt="Mountain" />
                            <div className="info">
                              <h1>{value.Name}</h1>
                              <p>{value.Description}</p>
                              <a href={value.Link}><button>Read More</button></a>
                            </div>
                          </div>
                            )
                             })}
                          
                        </div>
                        </div>
                </div>


             )
}

export default Movies