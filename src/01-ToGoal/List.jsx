import React, { useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import {FaRegEdit} from 'react-icons/fa'
import { GoalGlobalData } from './ToGoal';
import {BsHourglassSplit} from 'react-icons/bs'

function List() {
  const {goals } = useContext(GoalGlobalData)
  
  const goalList = [
     
    {   
        id :(new Date().getTime()).toString(36),
        goal:'Buy milk and egg',
        posted_date: new Date().toLocaleDateString(),
        due_date : '2/mar/2023',
    },
    {   
        id :(new Date().getTime()).toString(36),
        goal:'Complete To-do project',
        posted_date: new Date().toLocaleDateString(),
        due_date : '2/mar/2023'
    },
    {   
        id :(new Date().getTime()).toString(36),
        goal:'Clean Room',
        posted_date: new Date().toLocaleDateString(),
        due_date : '2/mar/2023'
    },
    {   
        id :(new Date().getTime()).toString(36),
        goal:'Eat healthy',
        posted_date: new Date().toLocaleDateString(),
        due_date : '2/mar/2023'
    },
    {   
        id :(new Date().getTime()).toString(36),
        goal:'Eat healthy',
        posted_date: new Date().toLocaleDateString(),
        due_date : '2/mar/2023'
    }
  ]
  
  
  return (
    <div  className='list-cn'>
        <ul className='list'>
           {
            goals.map((goalList,index)=>{
                const {goal , posted_date,due_date} = goalList
                 return (
                    <li key={index}>
                        <input type="checkbox" ></input> <label className='goal-label'>{goal}</label>
                        <div className='due-date-cn'>
                           <i className='due-i'><BsHourglassSplit/></i><span>{due_date}</span>
                        </div>
                        <div className='list-icon-cn'> 
                         <section className='list-icon'>
                         <i className='icon edit-i'><FaRegEdit/></i>
                        <i className='icon del-i'><RiDeleteBin6Line /></i>
                         </section>
                         <section className='date-cn'>
                        <i ></i> <span className='date-i'>{posted_date}</span>
                         </section>
                        </div>
                    </li>
                 )
            })
           }
        </ul>
    </div>
  )
}

export default List