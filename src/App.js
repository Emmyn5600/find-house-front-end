import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './helper/global';
import { theme } from './helper/theme';
import { Burger, Menu } from './components';
// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Burger />
        <Menu />
        <div className="App">
          <h1>Hello world</h1>
          <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" alt="burger icon" />
          <small>Made by Emmy from www.esconnect.com</small>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
