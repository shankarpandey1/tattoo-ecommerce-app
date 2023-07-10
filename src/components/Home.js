import React from 'react';
import data from '../data';
import './Home.css';
// import '.src/assets/Floral-tattoos.jpg';
// import '.src/assets/flower-tattoos.webp';

function Home() {
  return (
  <div className="home-container">     
    <h2>Welcome to the home of Tattooes !!!</h2>
    <h3><img src = {require('../assets/Floral-tattoos.jpg')} width="80" height="40" />  &nbsp;&nbsp;  
    <i>Beautiful you, beautiful tattoo</i> &nbsp; &nbsp;
    <img src={require("../assets/flower-tattoos.webp")} width="80" height="40" /> 
    </h3>
    <br />
      <h2>Our Artists</h2>
      <ul>
        {data.artists.map((artist) => (
          <li key={artist.id}>{artist.name} - {artist.speciality}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
