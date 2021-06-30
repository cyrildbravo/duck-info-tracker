import Header from './components/Header'
import DuckTableInfo from './components/DuckTableInfo'
import AddDuckInfo from './components/AddDuckInfo'
import { useState, useEffect } from 'react'

const App = () => {
  const [duckTableInfo, setDuckTableInfo] = useState([])

  // Add Duck info
  const addDuckInfo = (duckInfo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newDuckInfo = { id, ...duckInfo}
    setDuckTableInfo([...duckTableInfo, newDuckInfo])
  }

  useEffect(() => {
    const getDuckTableInfo = async () => {
      const duckTableInfoFromServer = await fetchDuckTableInfo()
      setDuckTableInfo(duckTableInfoFromServer)
    }
    getDuckTableInfo()
  }, [])

  // Fetch Duck Table Info
  const fetchDuckTableInfo = async () => {
    const res = await fetch ('http://localhost:5000/duckTableInfo')
    const data = await res.json()
    console.log(data)
    return data
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
