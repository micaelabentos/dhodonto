import React from 'react'
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { socialNetwork } from './socialNetwork';
import { Box } from '@mui/material';

const Footer = () => {
  return (
  <div style={{backgroundColor:"#d1cfcf"}}>
    
    <footer>
      <Box><img src="../images/DH.png" alt='DH-logo' /></Box>
      <Box>
        {
          socialNetwork.map(({ linkto, snTitle, Icon}) => (
              <Tooltip key={snTitle} title={snTitle}>
                <IconButton>
                  <a href={linkto} target="e_blank" rel="nonreferrer"><Icon /></a>
                </IconButton>
              </Tooltip>
          ))
        }
      </Box>
    </footer>
  </div>
  )
}

export default Footer