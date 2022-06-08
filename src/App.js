import './App.css';
import CatList from './CatList';
import { cats } from './cats.js';


function App() {
  return (
    <div className="App">
      <CatList cats={cats}/>
    </div>
  );
}

export default App;
