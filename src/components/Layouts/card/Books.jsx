
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import './Cards.css'
const Books = () => {
    var [Books,setBook]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/viewbook")
        .then(response =>{
            setBook(response.data)
        })
        .catch(err=>console.log(err))
    },[])




   return (
    <div>
       <div className='bk'>
            <div className="wrapper">
                {Books.map((value,index)=>{
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

export default Books