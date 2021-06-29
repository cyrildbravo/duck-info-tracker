import Header from './components/Header'
import DuckTableInfo from './components/DuckTableInfo'
import AddDuckInfo from './components/AddDuckInfo'
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

  // Add Duck info
  const addDuckInfo = (duckInfo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newDuckInfo = { id, ...duckInfo}
    setDuckTableInfo([...duckTableInfo, newDuckInfo])
  }


  return (
    <div className='container'>
      <Header title='Duck Info Tracker'/>
      <AddDuckInfo onAdd={addDuckInfo} />
      {duckTableInfo.length > 0 ? <DuckTableInfo duckTableInfo={duckTableInfo} /> : "No information to display"}
    </div>
  );
}

export default App;
