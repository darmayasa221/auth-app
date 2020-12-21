import { Controller, useForm } from 'react-hook-form'
import React  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from "sweetalert2";

import './Login.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Login(){
  const classes = useStyles();
  const {control,register,handleSubmit,errors} =  useForm()
  const Toast =  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const logIn = data =>{    
    if(data.nationalId + data.password === ''){  
      Toast.fire({
          icon:'error',
          title:'National Id and Passowrd is Empty'
        })
    }else if(data.password === ''){
      Toast.fire({
        icon: 'error',
        title: 'Password is Empty!'
      })
    }else if(data.nationalId === ''){
      Toast.fire({
        icon: 'error',
        title: 'National Id is Empty!'
      })
    }else{
      Swal.fire({
        icon:'success',
        title:'Login Success'
      })
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          2.0
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(logIn)}>
                  {errors.nationalId?.type === "maxLength" &&(
                     <p>MaxLength (16)</p>
                     )}
                     {errors.nationalId?.type === "minLength" &&(
                      <p>MinLength (16)</p>
                      )}
                  <TextField
                    title="nationalId"
                    type="number"
                    inputRef={register({maxLength:16,minLength:16})}
                    variant="outlined"
                    fullWidth
                    id="nationalId"
                    name="nationalId"
                    label="NationalID"
                    placeholder="17200000001123344"
                    />
                    <TextField
                    title="password"
                      inputRef={register}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      autoComplete="password"
                      />
                      <FormControlLabel 
                        control={<Controller name="remember" as={Checkbox} control={control} defaultValue={true} color="primary" />}
                        label="Remember me"
                      />
              <Button
                title="sub"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                data-tesid="button"
              >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
  
}

export default Login;