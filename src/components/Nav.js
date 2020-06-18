import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  AppBar,
  Grid,
  Button,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

const Nav = props => {
  const { darkMode, setDarkMode } = props;

  const handleChange = e => {
    setDarkMode(e.target.checked);
  };

  return (
    <AppBar position="static">
      <nav>
        <Grid container>
          <Grid item>
            <Link href="/"><Button color="primary">Home</Button></Link>
          </Grid>
          <Grid item>
            <Link href="/signin"><Button color="primary">Signin</Button></Link>
          </Grid>
          <Grid item>
            <Link href="/users"><Button color="primary">Users</Button></Link>
          </Grid>
          <Grid item>
            <Link href="/expenses"><Button color="primary">Expenses</Button></Link>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Switch checked={darkMode} onChange={handleChange} />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
          </Grid>
        </Grid>
      </nav>
    </AppBar>
  );
};

Nav.defaultProps = {
  darkMode: false,
  setDarkMode: () => {},
};

Nav.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

export default Nav;
