import { React, useContext } from 'react'
import Card from '../Components/Card'
import { Button } from '@mui/material'

import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal)
  const data = state.data
  const goBack = () =>{
    window.history.go(-1);
  }

  /* Aqui deberias renderizar las cards */
  return (
    <main className="card-container" >
      <div className='card-grid'>
        {
          data.map((user) => (
            <Card  name={user.name} username={user.username} liked={user.liked} id={user.id} key={user.id} />
          ))
        }

      </div>
      <Button onClick={goBack} className="">
          ir atrás
      </Button>
    </main>
  )
}

export default Home;