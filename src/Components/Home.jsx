import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setUsers(response.data)
        console.log(response.data)
    })
    .catch(err=>console.log(err))
},[])
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <TableContainer component={Paper} elevation={3} sx={{maxWidth:600,margin:'10 auto',backgroundColor:'lightblue'} }>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell><b>Fields id</b></TableCell>
                <TableCell><b>Title</b></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((value,index)=>{
                return(
                    <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.title}</TableCell>

                    </TableRow>
                )
            })}
        </TableBody>
        </Table> 
        </TableContainer> 
    </div>
  )
}

export default Home