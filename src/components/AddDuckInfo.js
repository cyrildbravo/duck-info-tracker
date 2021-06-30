import { useState } from 'react'
import duck from '../images/Duck.jpeg'

const AddDuckInfo = ({onAdd}) => {
  const [time, setTime] = useState('')
  const [food, setFood] = useState('')
  const [location, setLocation] = useState('')
  const [numberOfDucks, setNumberOfDucks] = useState('')
  const [foodConsumption, setFoodConsumption] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!time || !food || !location || !numberOfDucks || !foodConsumption){
      alert('All fields are required.')
      return
    }
    onAdd({time,food,location,numberOfDucks,foodConsumption})

    // Clear out the fields
    setTime('')
    setFood('')
    setLocation('')
    setNumberOfDucks('')
    setFoodConsumption('')
  }

  return (  
    <form className='add-form' onSubmit={onSubmit}>
      <div className="row">
        <div className="column">
          <div className='form-control'>
            <label>What time the ducks are fed?</label>
            <input type='text' placeholder='Format: HH:MM AM/PM' value={time} onChange={(e) => setTime(e.target.value)}></input>
          </div>
          <div className='form-control'>
            <label>What food the ducks are fed?</label>
            <input type='text' placeholder='Example: Bread' value={food} onChange={(e) => setFood(e.target.value)}></input>
          </div>
            <div className='form-control'>
            <label>Where the ducks are fed?</label>
            <input type='text' placeholder='Example: Central Park' value={location} onChange={(e) => setLocation(e.target.value)}></input>
          </div>
            <div className='form-control'>
            <label>How many ducks are fed?</label>
            <input type='text' placeholder='Example: 5' value={numberOfDucks} onChange={(e) => setNumberOfDucks(e.target.value)}></input>
          </div>
          <div className='form-control'>
            <label>How much food the ducks are fed?</label>
            <input type='text' placeholder='Example: 10g' value={foodConsumption} onChange={(e) => setFoodConsumption(e.target.value)}></input>
          </div>
        </div>
        <div className="column">
          <img className="img" src={duck} alt="Ducks around the world" />
        </div>
        <input type="submit" value="Submit Info" className="btn btn-block" />
      </div>
    </form>
  )
}

export default AddDuckInfo
