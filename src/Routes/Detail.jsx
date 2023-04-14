import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  
  const params = useParams()

  const [data, setData] = useState(null)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`${url}/${params.id}`).then(res => setData(res.data)).catch(err => console.log(err));
  },[params.id])
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const goBack = () =>{
    window.history.go(-1);
  }
  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detalle del dentista</h1>
      <List
        sx={{ width: '60%', margin:' 0 auto', border:'1px solid #c3c3c3', borderRadius: '15px', padding: '20px' }}
        component="ul"
        aria-labelledby="nested-list-subheader"
       
      >
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText primary={data?.name} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText secondary="¿Dónde puedes encontrarme?" sx={{bgcolor: "#8c8c8f"}}/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={data?.email}/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={data?.phone}/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={data?.website}/>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Button onClick={goBack} className="">
          ir atrás
      </Button>
    </>
  )
}

export default Detail