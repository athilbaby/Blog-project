import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
       <Box sx={{flexGrow:1}}>
        <AppBar position="static" style={{background:"lightgreen"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}align='left'>Blog Dashboard</Typography>
                <Button variant='contained' color='secondary'><Link to ={'/'}>Home</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to ={'/blog'}>Blog</Link></Button>
                
            </Toolbar>
        </AppBar>
        </Box> 
    </div>
  )
}

export default Navbar