
import { useForm } from 'react-hook-form'
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
import './Signup.css'


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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 180,
    },
  }));



const Signup = () => {
  const sig = (delay) => {
    new Promise(function(resolver){
      setTimeout(delay, resolver)
    })
  }
    const { errors ,register, handleSubmit, formState , reset} = useForm()
    const onSubmit = async (data) => {
      console.log(data)
      await sig(100000)
      alert('success')
      reset()
    };
    const classes = useStyles();
return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        2.0
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {errors.name && <p> Name is Required</p>}
            <TextField
              inputRef={register({required: true})}
              name="name"
              variant="outlined"
              fullWidth
              label="Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
          {errors.address && <p> Address is Required</p>}
            <TextField
              inputRef={register({required:true})}
              variant="outlined"
              fullWidth
              label="Address"
              name="address"
            />
          </Grid>
          <Grid item xs={12}>
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
           
          </Grid>
          <Grid item xs={12}>
          {errors.email?.type === "required" && (
              <p>Email is Required</p>
            )}
              {errors.email?.type === "pattern" && (
              <p>Invalid Email</p>
            )}
            <TextField
              inputRef={register({required: true, pattern : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}
              variant="outlined"
              fullWidth
              label="email"
              name="email"
              placeholder="email@any.any"
            />
          </Grid>
          <Grid item xs={12}>
            {errors.password?.type === "required" &&(
              <p>Password is Required</p>
            )}
            <TextField
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="password"
                
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="Check" inputRef={register({required:true})} value={false} color="primary" />}
              label="the data entered is correct, and I'm ready to sign up!"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item >
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
)
}

export default Signup;