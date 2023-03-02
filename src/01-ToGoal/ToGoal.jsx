import React ,{createContext, useState}from 'react'
import Input from './Input'
import List from './List'
import './ToGoal.css'
import {SiCheckmarx} from 'react-icons/si'

export const GoalGlobalData = createContext();

function ToGoal() {
    const [goals ,setGoals] = useState([
        {
            id :0,
            goal:'Buy Milk and tea',
            posted_date : new Date().toLocaleDateString(),
            due_date:'17/Feb/2023',
        },
        {
            id :1,
            goal:'Complete Project',
            posted_date : new Date().toLocaleDateString(),
            due_date:'18/Feb/2023',
        }
    ])

  return (
    <GoalGlobalData.Provider value={{goals,setGoals}}>
    <main className='goal-main'>
       <section className='goal-container'>
        <header>
            <span className='h1-icon'><SiCheckmarx/></span><h1>oals</h1>      
        </header>
        <div className='input-div'>
            <Input/>
        </div>
        <div className='goal-list'>
            <List/>
        </div>
       </section>
    </main>
    </GoalGlobalData.Provider>
  )
}

export default ToGoal