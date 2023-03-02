import React from "react";
import Card from "./Card";
import { useNavigate } from 'react-router-dom'

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
       <Card navigateHandler={navigateHandler}/>
       <Card/>
       <Card/>
       <Card/>
      </section>
      <footer>
        Made by Shivangi Singh
      </footer>
    </main>
  );
}

export default Links;
