import React ,{useContext, useState}from 'react'
import { GoalGlobalData } from './ToGoal'

function Input() {
  const {goals , setGoals} = useContext(GoalGlobalData)

  const [inputValue ,setInputValue] = useState({
    id :(new Date().getTime()).toString(36),
    goal:'',
    posted_date : new Date().toLocaleDateString(),
    due_date:new Date().toLocaleDateString(),
  })
  

  const handleFormSubmit = (e)=>{
         e.preventDefault();
         setGoals([...goals,inputValue])
         setInputValue({...inputValue,goal:'' })
  }

  const handleInput = (e)=>{
     setInputValue({...inputValue,goal:e.target.value})
  }
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const handledate= (e) =>{
        let exact_due_date = e.target.value
        let due_date_list = exact_due_date.split('-')
        let month = Number(due_date_list[1]-1)
        let  due_date = `${due_date_list[2]}/${months[month]}/${due_date_list[0]}`
        console.log(due_date)
        setInputValue({...inputValue,due_date:due_date})
  }
  function addLeadingZeros(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  let currentDatetime = new Date()
  let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate())
  
  return (
    <form className="form" type='submit' onSubmit={handleFormSubmit}>
    <input type="text" className="form-field" placeholder="Write your goals" onChange={handleInput} value={inputValue.goal}/>
    <i className='date-in'></i> <input type='date' className='input-date' onChange={handledate} min={formattedDate}></input><label className='date-label'>{inputValue.due_date}</label>
    <button type="submit" className="btn" >Add</button>
</form>
  )
}

export default Input