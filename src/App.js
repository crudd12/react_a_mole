import { useState } from 'react';
import './App.css';
import MoleContainer from './Components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: 'Franklin Gothic', fontSize: '3em' }}>React-a-Mole!</h1>
      <h2 style={{ fontFamily: 'Franklin Gothic', fontSize: '2em' }}>Score: {score}</h2>
      {createMoleHill()}
    </div>
  );
}

export default App;
