import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <br/>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Blogname:
        </Typography>
        <TextField id ="grade-input"blogname='sblog'  label="Filled" variant="filled" />
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Description:
        </Typography>
        <TextField id ="grade-input"description='des'  label="Filled" variant="filled" />
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Author name:
        </Typography>
        <TextField id ="grade-input"authorname='aut'  label="Filled" variant="filled" />
        <br/>
        <br/>
        <Button variant='contained'>Submit</Button>
        

    </div>
  )
}

export default Blog