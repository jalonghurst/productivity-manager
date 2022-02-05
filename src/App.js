
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Taskoverview from './Pages/Taskoverview';
import Pomodoro from './Pages/Pomodoro/Pomodoro';
import './App.css';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();


  return (
    <BrowserRouter>
    <div className={classes.App}>
        <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/Taskoverview" component={Taskoverview} exact />
          <Route path="/Pomodoro" component={Pomodoro} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
