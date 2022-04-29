import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import ColorSwatches from './components/ColorSwatches';
import AllColors from './components/AllColors';
import ColorDetails from './components/ColorDetails';
import { useState, useEffect } from 'react';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

// const hexes = ["#088F8F",
//   "#7393B3",
//   "#0000FF",
//   "#89CFF0",
//   "#F0FFFF",
//   "#00FFFF",
//   "#00CCCC",
//   "#0066CC",
//   "#3300FF",
//   "#333399",
//   "#339999",
//   "#339933",
//   "#663366",
//   "#6633CC",
//   "#FF00FF",
//   "#9900CC",
//   "#990099",
//   "#FF0066",
//   "#CCFF66",
//   "#CC9966",
//   "#CC00CC",
//   "#CC66CC",
//   "#660099",
//   "#66FFFF",
//   "#003300",
//   "#006633",
//   "#66CCCC",
//   "#00FFFF",
//   "#0000FF",
//   'black',
//   "#33CC33"]


function App() {
  const [currentColor, setCurrentColor] = useState('');
  const [hexes, setHexes] = useState([]);

  useEffect( () => {
    const handleDataCall = async () => {
      const res = await fetch('/colors', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await res.json();
      setHexes(data.colors);
      return data.colors;
    }

    setHexes(handleDataCall());

  }, [])

  return (
    <div className="text-xl">
      <Nav />
        <Main>
          <Sidebar 
            colors={colors} 
            hexes={hexes} 
            setCurrentColor={setCurrentColor}
          />
          {hexes.length > 0 &&
            <ColorSwatches>
              {currentColor === '' &&
                <AllColors 
                colors={hexes} 
                setCurrentColor={setCurrentColor}
                />
              }
              {currentColor !== '' && 
                <ColorDetails 
                  hexCode={currentColor} 
                  setCurrentColor={setCurrentColor} 
                />
              }
            </ColorSwatches>
          }
        </Main>
    </div>
  );
}

export default App;
