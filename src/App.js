import './App.css';
import CarList from './CarList';
import CatList from './CatList';
import { cats } from './cats.js';
import { cars } from './cars.js';



function App() {
  return (
    <div className="App">
      <CatList cats={cats}/>
      <hr/>
      <CarList cars={cars}/>
    </div>
  );
}

export default App;
