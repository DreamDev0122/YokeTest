import './main.css';
import Mint from './components/Mint/index';
import Header from './components/Header';
import Story from 'components/Story';
function App() {
  return (
    <div className="App">
      <div className='BackPage'>
        <Header />
        <Mint />
      </div>
      <Story />
    </div>
  );
}

export default App;
