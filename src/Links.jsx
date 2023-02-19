import React from 'react'
import { useNavigate } from 'react-router-dom'

function Links() {
  const navigate = useNavigate();
  
  const handleNavigate = (path)=>{

    navigate({
      pathname : path
    })
  }

  return (
    <main>
        <header>
          <h1>My Front-End Projects</h1>
          </header>
        <section>
            <div className='card card-1'>
                <div className='image-cn' onClick={()=>handleNavigate('/togoal')}>Goal</div>
                <div className='link-cn'></div>
            </div>
        </section>
        <footer></footer>
    </main>
  )
}

export default Links