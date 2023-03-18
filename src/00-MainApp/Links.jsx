import React from "react";
import Card from "./Card";
import { useNavigate } from 'react-router-dom'
import tourThumbnail from '../Image/tour.png'
import goalThumbnail from '../Image/goal.png'

function Links() {
  const navigate = useNavigate()
  const navigateHandler = (path)=>{
    console.log(path)
   navigate({
    pathname:path
   })
  }
  return (
    <main>
      <header>
        <h1>Beginner Projects</h1>
      </header>
      <section className="cards">
       <Card navigateHandler={navigateHandler} path='/togoal' title='To-Goal' thumbnail={goalThumbnail}/>
       <Card navigateHandler={navigateHandler} path='/ourtour' title='Our Tour' thumbnail={tourThumbnail}/>
       <Card title='UnKnown'/>
       <Card title='UnKnown'/>
      </section>
      <footer>
        Made by Shivangi Singh
      </footer>
    </main>
  );
}

export default Links;
