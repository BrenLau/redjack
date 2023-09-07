import './App.css';
import background from "./58471.jpg"
import PlayingArea from './Playing Area/PlayingArea';

function App() {
  return (
    <div className="App" style={{
      background: `url(${background})`
    }}>
      <PlayingArea />
    </div>
  );
}

export default App;
