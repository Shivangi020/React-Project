import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GoalGlobalData } from "./ToGoal";
import { BsHourglassSplit } from "react-icons/bs";

function List() {
  const { goals, setGoals } = useContext(GoalGlobalData);
  const [ lineThrough, setLineThrough ] = useState(false);
  let goalList = [
    {
      id: 0,
      goal: "Buy milk and egg",
      posted_date: new Date().toLocaleDateString(),
      due_date: "2/mar/2023",
    },
    {
      id: 1,
      goal: "Complete To-do project",
      posted_date: new Date().toLocaleDateString(),
      due_date: "2/mar/2023",
    },
    {
      id: 2,
      goal: "Clean Room",
      posted_date: new Date().toLocaleDateString(),
      due_date: "2/mar/2023",
    },
    {
      id: 3,
      goal: "Eat healthy",
      posted_date: new Date().toLocaleDateString(),
      due_date: "2/mar/2023",
    },
    {
      id: 4,
      goal: "Eat healthy",
      posted_date: new Date().toLocaleDateString(),
      due_date: "2/mar/2023",
    },
  ];

  const deleteGoal = (index) => {
    const removeItem = goals.filter((todo) => {
      return todo.id !== index;
    });
    setGoals(removeItem);
  };

  const handelCheckbox = (e) => {
   if(e.target.checked){
    setLineThrough(true)
   }else{
    setLineThrough(false)
   } 
  };

  return (
    <div className="list-cn">
      <ul className="list">
        {goals.map((goalList, index) => {
          const { goal, posted_date, due_date, id } = goalList;
          return (
            <li key={index}>
              <input type="checkbox" onClick={handelCheckbox}></input>{" "}
              <label
                className={`${
                  lineThrough
                    ? `goal-label goal-label-linethrough`
                    : "goal-label"
                }`}
              >
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
    </div>
  );
}

export default List;
