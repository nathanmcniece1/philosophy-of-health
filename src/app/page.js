import React from 'react';
import Cover from './components/Cover/Cover';
import Buttons from './components/Buttons/Buttons';
import Introduction from './components/Introduction/Introduction';
import Health from './components/Health/Health';
import Life from './components/Life/Life';
import Ethics from './components/Ethics/Ethics';
import Impulse from './components/Impulse/Impulse';
import Desire from './components/Desire/Desire';
import MentalHealth from './components/MentalHealth/MentalHealth';
import Holygrail from './components/Holygrail/Holygrail';
import './styles.css';


function Home() {
  return (
    <main>
      <Cover />
      <Buttons />
      <Introduction />
      <Health />
      <Life />
      <Ethics />
      {/* <Impulse /> */}
      <Holygrail />
      <Desire />
      <MentalHealth />
    </main>
  );
}

export default Home;
