import React from 'react'
import Form from '../Components/Form'
import { Box } from '@mui/material'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
      <Box sx={{display: "flex", flexDirection: "column", height: "75vh", margin: "20px"}}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus consultas y nos pondremos en contacto contigo</p>
      <Form/>
      </Box>
  )
}

export default Contact
