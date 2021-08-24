import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './helper/global';
import { theme } from './helper/theme';
import { Burger, Menu } from './components';

// import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Burger />
        <Menu />
        <h1>Find My House</h1>
        <Figure>
          <FigureImage
            width={450}
            height={485}
            alt="171x180"
            src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
          />
          <FigureCaption>
            You are looking for awesome house in Rwanda.
            Keep calm you get what you are looking for.
          </FigureCaption>
        </Figure>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
