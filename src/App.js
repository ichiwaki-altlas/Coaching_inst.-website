import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn'
import ChallengeList from './components/ChallengeList'
import ChallengeView from './components/ChallengeView'
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D83063'
    },
    secondary: {
      main: '#304FFE'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<SignIn />} />
          <Route path="/challenges" children={<ChallengeList />} />
          <Route path="/challenge/view/:id" children={<ChallengeView />} />
          {/* <Route path="/challenge/edit/:id" children={<ChallengeEdit />} /> */}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
