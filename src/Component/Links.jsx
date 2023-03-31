import React from "react";
import Card from "./Card";
import {GoMarkGithub} from 'react-icons/go'
import { CardData } from "../CardData";

function Links() {

  return (
    <main>
      <header>
        <h1>Beginner Projects</h1>
      </header>
      <section className="cards">
        {
          CardData.map((data,index)=>{
               const {title ,link ,thumbnail} = data
               return   <Card title={title} thumbnail={thumbnail}   path={link} key={index}/>
          })
        }
      </section>
      <footer>
        Made by  Shivangi Singh
        <a href='https://github.com/Shivangi020'><GoMarkGithub className="github-icon"/></a>
      </footer>
    </main>
  );
}

export default Links;
