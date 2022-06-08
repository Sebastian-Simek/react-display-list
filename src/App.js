import './App.css';
import CarList from './CarList';
import CatList from './CatList';
import { cats } from './cats.js';
import { cars } from './cars.js';
import { composers } from './composers.js';
import ComposerList from './ComposerList';



function App() {
  return (
    <div className="App">
      <CatList cats={cats}/>
      <hr/>
      <CarList cars={cars}/>
      <hr/>
      <ComposerList composers={composers}/>
    </div>
  );
}

export default App;
