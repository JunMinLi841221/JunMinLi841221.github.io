import React,{useState}from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import Me from '../img/Me.png';
import '../css/Home.css'


function About() {
  const [checked, setChecked] = useState(true);

  return (
   <Container><br/>
      <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
        <div >     
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12} >
          <img src={Me} alt="Me" className="me"/>
          <div className="name"><b>JunMin Li</b></div>
          <div className="title">WEB DESIGNER & DEVELOPER</div>
          <Tooltip title="Email">
            <IconButton aria-label="Email" href="mailto:junminli841221@gmail.com">
              < EmailIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton aria-label="Facebook" href="https://www.facebook.com/jimmy.li.9237244" target="_blank">
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github Projects">
            <IconButton aria-label="Github" href="https://github.com/JunMinLi841221/Project-Demos" target="_blank">
              < GitHubIcon/>
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item xs={12} sm={12}><br/>
          <div>
          <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
          <div>  
          <b>CURRENT OBJECTIVE</b><br/>
          Seeking a position in Computer Science field where I can fully utilize my potential, skill, and experience in industry. <br/>
          In addition, creating a win-win situation by joining a productive team that not only has a common goal and great cooperation,<br/>
          but also provides opportunities for continue learning and self-growing.
          </div>
        </Zoom>
          </div>
        </Grid> 
        </Grid>  
          </div>
        </Zoom>
       
    <br/>
   </Container>
  );
}

export default About;
