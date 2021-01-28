import React from 'react';
import './styles/Home.css';
import AfterLogin from '../../Navbar/AfterLogin';
import history from '../routes/history';

const Home = () => {

    return <div>
        <AfterLogin />
        <div className = "home">
          HOME:
        </div>
        <div className = "recycled">
          YOU HAVE RECYCLED SO FAR: <p></p>
          200 PLASTIC BOTTLES <br></br>
          35 PLASTIC CONTAINERS <br></br>
          300 PLASTIC BAGS <br></br>
          200 PAPER BAGS <br></br>
        </div>
        <div className = "userData">
          USERNAME:                         PABLO <p></p>
          EARTH POINTS:                     9645         
        </div>
        <button className = "button" onClick={() => history.push('/recycle')}>
          Recycle
        </button>
    </div>

    
}

export default Home;