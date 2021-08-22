import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../helper/global';
import { theme } from '../helper/theme';
// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <h1>Hello world</h1>
          <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" alt="burger icon" />
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
