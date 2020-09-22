import React from 'react';
import {HashRouter, BrowserRouter,Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import About from "./AboutMe";
import Education from "./Education";
import MyArt from "./MyArt";
import MyProject from "./MyProject";
import '../css/Home.css'

function App() {
  return (
    <div><br/>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid className="overall" item xs={6}>
          <ButtonGroup variant="text" aria-label="text primary button group">
            <Button  href = "/"> About Me</Button>
            <Button  href = "https://junminli841221.github.io/MyEducation"> Education / Experience </Button>
            <Button href = "https://junminli841221.github.io/MyEducation"> Art Works </Button>
            <Button href = "https://junminli841221.github.io/MyEducation"> CS Projects </Button>
          </ButtonGroup>
          </Grid>        
        </Grid>  
        <br/><br/>
      <HashRouter>
        <Switch>
          <Route path="/MyEducation" component={Education}/>
          <Route path="/MyArtWorks" component={MyArt}/>
          <Route path="/MyProjects" component={MyProject}/>
          <Route exact path="/" component={About}/>
        </Switch>
      </HashRouter>
   </div>
  );
}

export default App;
