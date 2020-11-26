import { Controller, useForm } from 'react-hook-form'
import React from 'react';
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


const Login = () => {
  const {control,register,handleSubmit,errors} =  useForm()
  const classes = useStyles();
  const vald = Object.keys(errors).length > 0 && alert('GAGAL')
  const logIn = (data) =>{
    console.log(data)
    return vald
  };

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
        <form className={classes.form}>
             {errors.nationalId?.type === "required" &&(
                  <p>National ID is Required</p>
              )}
               {errors.nationalId?.type === "maxLength" &&(
                  <p>MaxLength (16)</p>
              )}
                 {errors.nationalId?.type === "minLength" &&(
                  <p>MinLength (16)</p>
              )}
            <TextField
              type="number"
              inputRef={register({required:true , maxLength:16,minLength:16})}
              variant="outlined"
              fullWidth
              name="nationalId"
              label="National ID"
              placeholder="17200000001123344"
            />
            {errors.password?.type === "required" &&(
               <p>Password is Required</p>
             )}
            <TextField
              inputRef={register({required: true})}
              margin="normal"
              variant="outlined"
              fullWidth
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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit(logIn)}
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