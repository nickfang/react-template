import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ThemeProvider from './providers/ThemeProvider';
import RouterProvider from './providers/RouterProvider';
import Nav from './components/Nav';
import Home from './components/Home';
// import About from './components/About';
import User from './components/User';
import NotFound from './components/NotFound';
import Signin from './components/Signin';

/**
 * App Component
 *
 * @namespace App
 *
 */

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider darkMode={darkMode}>
      <RouterProvider>
        <Container maxWidth={false} disableGutters>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/user" component={User} />
            <Route default component={NotFound} />
          </Switch>
        </Container>
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
