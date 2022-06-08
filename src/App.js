import './App.css';
import CarList from './CarList';
import CatList from './CatList';
import ComposerList from './ComposerList';
import RedditList from './RedditList';
import { cats } from './cats.js';
import { cars } from './cars.js';
import { composers } from './composers.js';
import { reddit } from './reddit.js';
function App() {
  return (
    <div className="App">
      <CatList cats={cats}/>
      <hr/>
      <CarList cars={cars}/>
      <hr/>
      <ComposerList composers={composers}/>
      <hr/>
      <RedditList reddit={reddit}/>
    </div>
  );
}

export default App;
