
import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
      
        
      
      <div className="buttonContainer">
            
            <Link to="/camera">
        <button className="choice">
          Take Photo
        </button>
        </Link>
  
      <button className="choice">
        Gallery
      </button>
  
      </div>
  
    );
  }
  
  export default Home;
  