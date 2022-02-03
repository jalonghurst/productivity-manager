import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
  <AppBar position='static'>
      <Container>
          <Toolbar>
              <Typography variant='h6'>
                  Productivity Manager
              </Typography>
          </Toolbar>
      </Container>
</AppBar>
  )};

export default Header;
