import { React } from "react";
import Card from "../Components/Card";
import { Button } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favorites = localStorage.getItem("favorites");
  const favParsed = JSON.parse(favorites);
    
  const goBack = () =>{
    window.history.go(-1);
  }
  return (
    <>
      <h1>Dentistas Favoritos</h1>
      {favParsed.length > 0 ?
      <div className="card-grid">
        {
          favParsed?.map((fav) => (
            <Card name={fav.name} username={fav.username} id={fav.id} key={fav.id} />
          ))
        }
      </div> : <h4 style={{marginLeft: '15px'}}>No tienes favoritos :(</h4>}
      <Button onClick={goBack} className="">
          ir atrás
      </Button>
    </>
  );
};

export default Favs;
