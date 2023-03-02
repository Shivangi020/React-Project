import React ,{useContext} from 'react'
import { GoalGlobalData } from './ToGoal';
import {FaRegEdit} from 'react-icons/fa'
import {BsHourglassSplit} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'

function GoalList() {
    const { goals, setGoals } = useContext(GoalGlobalData);

  
    const deleteGoal = (index) => {
      const removeItem = goals.filter((todo) => {
        return todo.id !== index;
      });
      setGoals(removeItem);
    };
  

  
  return (
    <ul className="list">
    {goals.map((goalList, index) => {
      const { goal, posted_date, due_date, id } = goalList;
      return (
        <li key={index}>
          <input type="checkbox"></input>
          <label>
            {goal}
          </label>
          <div className="due-date-cn">
            <i className="due-i">
              <BsHourglassSplit />
            </i>
            <span>{due_date}</span>
          </div>
          <div className="list-icon-cn">
            <section className="list-icon">
              <i className="icon edit-i">
                <FaRegEdit />
              </i>
              <i className="icon del-i">
                <RiDeleteBin6Line onClick={() => deleteGoal(id)} />
              </i>
            </section>
            <section className="date-cn">
              <i className="date-i-icon"></i><span className="date-i">{posted_date}</span>
            </section>
          </div>
        </li>
      );
    })}
  </ul>
  )
}

export default GoalList