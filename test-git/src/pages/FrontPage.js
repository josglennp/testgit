import React, { useState } from 'react';
import './pages.css';
import { Button, Box, Grid, TextField, Visibility,VisibilityOff } from '@mui/material';

const FrontPage = () => {
    const [value, setValue] = useState({});

    return (
        <>
        <div style={{position:'absolute', border:'1px solid tomato'}}>
        </div>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <h1 style={{color:'white', textAlign:'center'}}>Jop-Son Enterprises Payroll System</h1>
            <Box 
                sx={{ 
                    ml:1,
                    mr:1,
                    p: 10, 
                    backgroundColor:'white',
                    border: '1px solid grey',
                    boxShadow: 1,
                    borderRadius: 2,
                }}
            >
                <Grid
                    sx={{
                    }}
                    direction="column"
                >
                    <TextField 
                    sx={{mb:2, color: 'white'}}
                    id="outlined-basic" 
                    fullWidth 
                    label="User Name" 
                    variant="outlined" 
                    required
                    />
                    <TextField 
                    type={'password'}
                    id="outlined-basic" 
                    fullWidth 
                    label="Password" 
                    variant="outlined" 
                    required
                    />
                    <Button 
                        sx={{mt:2}}
                        variant='contained'
                    >
                        Login
                    </Button>
                </Grid>
            </Box>
        </Grid>
        </>
    )
};

export default FrontPage;