import React from 'react';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { signIn } from '../api/users';

const Signin = () => {
  const useStyles = makeStyles(theme => ({
    paper: {
      margin: theme.spacing(8, '30%'),
      padding: theme.spacing(2, 4, 4, 4),
      minWidth: '180px',
    },
    itemFirst: {
      margin: theme.spacing(0, 0, 1, 0),
    },
    item: {
      margin: theme.spacing(1, 0),
    },
    button: {
      margin: theme.spacing(3, 0, 0, 0),
    },
  }));
  const classes = useStyles();

  const onSubmit = async values => {
    console.log(values);
    const { email, password } = values;
    try {
      const response = await signIn({ email, password });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <Paper className={classes.paper}>
      <h1>Sign In</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify="center">
              <Grid item xs={12} className={classes.item}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.button}>
                <Button
                  // disabled={submitting || pristine}
                  color="primary"
                  variant="contained"
                  label="Login"
                  // onClick={handleSubmit}
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Paper>
  );
};

export default Signin;
