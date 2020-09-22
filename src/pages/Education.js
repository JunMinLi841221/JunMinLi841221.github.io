import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../css/Home.css'

function Education() {
  return (
   <Container>
     <Grid container spacing={3}>
        <Grid item xs={6} sm={6} >
        <Box className="education">        
          <div className="sub_points">&nbsp;EDUCATION IN COMPUTER SCIENCE</div>
            <p><b>San Francisco State University</b><br/>
              2018 - 2020<br/>
              Bachelor of Science degree with Cum Laude Honor. GPA 3.6<br/><br/>
              <b>City College of San Francisco</b><br/>
              2015 - 2017<br/>
              Associate of Science degree with High Honor. GPA 3.5</p>
        </Box>

        <Box className="education">
          <div className="sub_points">&nbsp;WORK EXPERIENCE</div>
          <p><b>Panda Express, Shift leader / San Francisco CA</b><br/>
            2015 – 2020<br/>
            Lead all daily operating areas and ensure the safety of guests and associates through training and execution of food safety standard and guidelines.</p>
        </Box>

        <Box className="education">
          <div className="sub_points">&nbsp;TECHNICAL SKILLS</div>
          <p><b>Experienced with</b><br/>
          React, Node JS, Redux, Redis, JSON, AWS, Github</p>
          <p><b>DataBase</b><br/>
            MySQL, MongoDB</p>
          <p><b>Programming Language</b><br/>
            HTML, CSS, JavaScript, Java, C++</p>
          <p><b>Design Skills</b><br/>
            Hand sketch, UI, Graph design, Photoshop</p>
        </Box>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Box className="education">
            <div className="sub_points">&nbsp;WEB APPLICATION DEVELOPMENT EXPERIENCE</div>
            <p>From 2019 to 2020, three main projects were completed, in different teams of 6 people with different tool sets.</p>
            <p><b>Gator-Dater</b><br/>
              • Express (Back End) - Back end with get/post endpoints<br/>
              • MongoDB (Storage) - For storing all the users information <br/>
              • Amazon Web Service Elastic Compute Cloud (AWS EC2) - To serve our application<br/>
              • Websocket - For real time chat interactions (front end)<br/>
              • React + Redux - for building UI<br/>
              • Microserver architecture (Back End) - for some services to run multiple instances<br/>
              • Gateway - All front end requests hit gateway first for authorization<br/>
              • Redis - For caching values
              </p> 
            <p><b>Momentum</b><br/>
              • Front-end: React, Javascript<br/>
              • Back-end: Java, Spark, MongoDB</p>
            <p><b>SFSUACCESS</b><br/>
              • Front-end: React, Redux, Javascript
              • Back-end: Python, MySQL</p>
            <p><b>My responsibilities</b><br/>
              As the front-end leader, providing necessary technical support, feedback, and communicate with the back-end team to ensure our progress is on track.</p>
            <p><b>My contribution</b><br/>
              • Construct the overall front-end architecture <br/>
              • Construct, revise the overall UI <br/>
              • Implement functions, ensure they work properly<br/>
              • Assign tasks to front-end members, and keep checking progress<br/>
              • Regularly communicate with back-end lead about the overall implementation</p>
          </Box>
        </Grid>
      </Grid>
      
   </Container>
  );
}

export default Education;
