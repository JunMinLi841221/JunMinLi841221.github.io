import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GD from '../img/my_project/GD.png';
import ACCESS from '../img/my_project/ACCESS.png';
import Momentum from '../img/my_project/Momentum.png';
import '../css/Home.css'

function MyProject() {

  const project_list = ["SFSUACCESS","Gator-Dater","Momentum"]
  const project_description = [ "The name of our project is called SFSU Access. In this project, we want to provide SFSU"+
                                "students and faculties a safe, easy, and convenient place to purchase, exchange, and share media"+
                                "contents. At this time, everyone has easy access to at least one electronic device, and people"+
                                "create numerous amounts of media content everyday.",
                                
                                "Gator-Dater is a dating app for SFSU students, in which students register and like other people's "+
                                "profiles which then create's a match. The user will get to interact with their match via email, "+
                                "and will go in knowing basic information such as name, age, major (all of which is used to match "+
                                "them in the first place).",
                                
                                "Momentum is a web app that developed inspired by Google Chrome Momentum. It has some of the functions "+
                                "that Chrome Momentum does, such as todo list, serch area, daily goal, and the Sanfrancisco weather border ect. "+
                                "In addition, we added a create/ login page to the app as it is the requirement.",
                                ]
  const project_thumnail = [ACCESS,GD,Momentum]

  const learnMore=(index)=>{
    var url;
    switch(index){
      case 0: url = "https://github.com/JunMinLi841221/Project-Demos/tree/master/SFSUACCESS" 
      break;
      case 1: url = "https://github.com/JunMinLi841221/Project-Demos/tree/master/Gator-Dater"
      break;
      default: url = "https://github.com/JunMinLi841221/Project-Demos/tree/master/Momentum"
     
      
    }
    window.open(url);
  }
  return (
    <Container>
        <Box className="education"> 
        {project_list.map(number => {
        return<div key = {number}>
        <Card className="root">   
        <CardContent className="content">
          <Typography component="h6" variant="h6">
            {number}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {project_description[project_list.indexOf(number)]}
          </Typography><br/>
          <Button variant="contained" color="primary" onClick = {e=>learnMore(project_list.indexOf(number))}>Learn more</Button>
        </CardContent>
        <CardMedia
        className="cover"
        image={project_thumnail[project_list.indexOf(number)]}
        title={number}
      />
    </Card><br/></div>
})}
    </Box>    
   </Container>
  );
}

export default MyProject;