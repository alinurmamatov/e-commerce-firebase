import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {Grid, FormControl, Input, Button} from '@mui/material';
import Header from '../components/commons/Header';
import {Navigate} from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginInfo, setLoginInfo] = useState({});
    const {loginWithEmail, userMain} = useContext(AuthContext);

    const handleLogin = () => {
        loginWithEmail(loginInfo.email, loginInfo.password)
    }

  return (
    <>
        { !userMain ? (
            <>
            <Header/>
            <Grid container spacing={2}>
                <Grid item sx={12}>
                    <FormControl>
                        <Input placeholder='email' onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}></Input>
                    </FormControl>
                </Grid>
                <Grid item sx={12}>
                    <FormControl>
                        <Input type={showPassword ? "text" : "password"} placeholder='password' onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}></Input>
                        <Button onClick={() => setShowPassword(!showPassword)}>See password</Button>
                    </FormControl>
                </Grid>
                <Grid item sx={12}>
                    <FormControl>
                        <Button onClick={() => handleLogin()}>Login</Button>
                    </FormControl>
                </Grid>
            </Grid>
            </>
            ) : (<Navigate to="/dashboard"/>)
        }
    </>
  )
}

export default Login;