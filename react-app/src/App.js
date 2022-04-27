import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import ColorSwatches from './components/ColorSwatches';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

function App() {
  return (
    <div className="text-xl">
      <Nav />
      <Main>
        <Sidebar colors={colors}/>
        <ColorSwatches />
      </Main>
    </div>
  );
}

export default App;
