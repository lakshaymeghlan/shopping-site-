import React,{useState} from 'react'
import {Box, Button ,TextField, Typography} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import Navbar from '../Navbar';

const Login = () => {
    
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setinputs] = useState({
        name:"", email:"", password:"",
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Box display="flex" flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"Center"} margin="auto" marginTop={5}
                    padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}>
                    <Typography variant="h2" padding={3} textAlign="center">
                        {isSignup ? "Signup":"Login"}
                    </Typography>
                    {isSignup && (<TextField name="name" value={inputs.name}  margin="normal" type={'text'} variant='outlined' placeholder='Name' />)}

                    <TextField name="email" value={inputs.email} margin="normal" type={'email'} variant='outlined' placeholder='Email' />

                    <TextField name="password" value={inputs.password}  margin="normal" type={'password'} variant='outlined' placeholder='Password' />

                    <Button endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon/>} type='submit' sx={{ marginTop: 3, borderRadius: 3}} variant="contained" color="warning" >
                        {isSignup ? "Signup":"Login"}
                        </Button>
                    
                    <Button endIcon={isSignup ? <LoginIcon/> : <HowToRegIcon/>} onClick={()=>setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3}} >
                        Change to {isSignup ? "Login" : "Signup"}
                        </Button>



                </Box>
            </form>
        </div>
    ) 
}

export default Login
