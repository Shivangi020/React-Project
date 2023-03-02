import React, { useContext} from "react";
import EmptyList from "./EmptyList";
import GoalList from "./GoalList";
import { GoalGlobalData } from "./ToGoal";


function List() {
  const {goals} = useContext(GoalGlobalData)
  console.log(goals.length)
  return (
    <div className="list-cn">
  {
    goals.length ===0? <EmptyList/>: <GoalList/>
  }
    </div>
  );
}

export default List;
