import React from 'react';
import Cover from './components/Cover/Cover';
import Buttons from './components/Buttons/Buttons';
import Introduction from './components/Introduction/Introduction';
import Health from './components/Health/Health';
import Life from './components/Life/Life';
import Ethics from './components/Ethics/Ethics';
// import Impulse from './components/Impulse/Impulse';
import Holygrail from './components/Holygrail/Holygrail';
import Desire from './components/Desire/Desire';
import MentalHealth from './components/MentalHealth/MentalHealth';
import './styles.css';

function Home() {
  return (
    <div className="outer-container"> {/* New outer container */}
      <main className="home-container">
        <div className="left-column">
          <Cover />
          <Buttons />
        </div>
        <div className="right-column">
          <div className="description">
            <h2 className="description-heading">Description</h2>
            <p className="description-body">The Philosophy of Health is an exploration of the concept of health. It is an argument for health as a kind of value superstructure, a value which grounds all others. The advancement of this continuum is the advancement of human potential.</p>
            <br></br>
          </div>
          <Introduction />
          <Health />
          <Life />
          <Ethics />
          {/* <Impulse /> */}
          <Holygrail />
          <Desire />
          <MentalHealth />
        </div>
      </main>
    </div>
  );
}

export default Home;
