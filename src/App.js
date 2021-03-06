import Header from './components/Header'
import DuckTableInfo from './components/DuckTableInfo'
import AddDuckInfo from './components/AddDuckInfo'
import { useState, useEffect } from 'react'

const App = () => {
  const [duckTableInfo, setDuckTableInfo] = useState([])

  // Add Duck info
  const addDuckInfo = async (duckInfo) => {
    const res = await fetch('http://localhost:5000/duckTableInfo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(duckInfo)
    })

    const data = await res.json()
    setDuckTableInfo([...duckTableInfo, data])
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
