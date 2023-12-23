import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"


type LoginType = {
  username: string,
  password: string,
}


export const LoginPage:React.FC = ()=>{

  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });


  const dataLogin = (event: React.ChangeEvent<HTMLInputElement> ) =>{
       setLoginData({
        ...loginData,
        [event.target.name]: event.target.value
       })
  };

  const handleSubmit = (event:React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log(loginData);
  }

    return(
      <Container sx={{mt:9}} maxWidth='sm'>
           <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'}
           sx={{minHeight:'100vh'}}
           >

            <Grid item>
               <Paper sx={{'padding':'1.2em', borderRadius: '0.5em'}}>

                <Typography variant="h4"
                  marginBottom={1.5}> Iniciar Sesión</Typography>
                <Box 
                component='form'
                onSubmit={handleSubmit}
                > 
                   <TextField fullWidth 
                      name='username'
                         label='Email' 
                         sx={{marginTop:2, marginBottom:2}} margin="normal"
                         required  
                      onChange={dataLogin}       
                   />
                   <TextField fullWidth 
                     name="password"
                       type="password"
                       label='Password' 
                       margin="normal"
                       required
                      onChange={dataLogin}       

                   />

                   <Button fullWidth type="submit" sx={{marginTop:2, marginBottom:2.5}} variant="contained">Iniciar Sesión</Button>
                </Box>

               </Paper>
            </Grid>

           </Grid>

      </Container>
    )
}