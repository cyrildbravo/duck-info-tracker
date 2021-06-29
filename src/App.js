import Header from './components/Header'
import DuckTableInfo from './components/DuckTableInfo'
import { useState } from 'react'

const App = () => {
  const [duckTableInfo, setDuckTableInfo] = useState([
    {
      id: 1,
      time: 'May 10th at 1:00pm',
      food: 'Bread',
      location: 'Central Park',
      numberOfDucks: 5,
      foodConsumption: 5,
    }
  ])

  return (
    <div className='container'>
      <Header title='Duck Info Tracker'/>
      {duckTableInfo.length > 0 ? <DuckTableInfo duckTableInfo={duckTableInfo} /> : "No information to display"}
    </div>
  );
}

export default App;
