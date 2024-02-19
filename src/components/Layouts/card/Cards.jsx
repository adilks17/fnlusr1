import React from 'react';
import './Cards.css'
const Cards = () => {
  return (
    <div className='bk'>
    <div className="wrapper">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Mountain" />
        <div className="info">
          <h1>Mountain</h1>
          <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Road" />
        <div className="info">
          <h1>Road</h1>
          <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Protester" />
        <div className="info">
          <h1>Protester</h1>
          <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
