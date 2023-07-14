import React from 'react';
import data from '../data';
import './Home.css';


function Home() {
  return (
  <div className="home-container">     
    <h2>Welcome to the home of Tattooes !!!</h2>
    <h3><img src = {require('../assets/Floral-tattoos.jpg')} width="100" height="40" />  &nbsp;&nbsp;  
    <i>"Beautiful you, beautiful tattoo"</i> &nbsp; &nbsp;
    <img src={require("../assets/flower-tattoos.webp")} width="80" height="40" /> 
    </h3>
      <h2 className='artists'>Our Popular Artists</h2>
      <ol id='artists1'> <b><i>
        {data.artists.map((artist) => (
          <li key={artist.id}>{artist.name},  Speciality : {artist.speciality}</li>
        ))}</i></b>
      </ol>
    </div>
  );
}

export default Home;
