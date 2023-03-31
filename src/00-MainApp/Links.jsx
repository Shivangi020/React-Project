import React from "react";
import Card from "./Card";
import { useNavigate,Link } from 'react-router-dom'
import tourThumbnail from '../Image/tour.png'
import goalThumbnail from '../Image/goal.png'
import moneyMiserThumbnail from '../Image/money-miser.png'
import noImage from '../Image/no-image.png'
import pomodoro from '../Image/pomodoro.png'
import {GoMarkGithub} from 'react-icons/go'


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
       <Card navigateHandler={navigateHandler} path='https://my-tour-list.netlify.app/' title='Our Tour' thumbnail={tourThumbnail}/>
       <Card title='Money-Miser' navigateHandler={navigateHandler} path='https://money-miser.netlify.app/' thumbnail={moneyMiserThumbnail}/>
       <Card title='Pomodoro-Me' thumbnail={pomodoro} path='https://pomodoro-me.netlify.app/'/>
      </section>
      <footer>
        Made by  Shivangi Singh
        <Link to='https://github.com/Shivangi020/React-Project'><GoMarkGithub className="github-icon"/></Link>
      </footer>
    </main>
  );
}

export default Links;
