import RollDice from './RollDice';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';


function App() {
  return (
    <div className="App">
      <RollDice />
      <ScoreKeeper/>
      <IconList />
    </div>
  );
}

export default App;

//NB: setState issues is addressed in ScoreKeeper.js, IconList.js

// data to be passed into state should be to the bearest minimum.
// state should live on the parent to support the "downward data flow"
// while also making debugging easier (when state is more centralized). 

