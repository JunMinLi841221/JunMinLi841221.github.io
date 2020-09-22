import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';

import '../css/Home.css'

//imgs
import Yawning from '../img/my_art/Yawning.JPG';
import Dance from '../img/my_art/Dance.JPG';
import Real_modle from '../img/my_art/Real_modle.JPG';
import Cat from '../img/my_art/Cat.JPG';
import After_shower from '../img/my_art/After_show.JPG';
import Landscape from '../img/my_art/Landscape.JPG';
import Kiss from '../img/my_art/Kiss.JPG';



function MyArt() {
  var img_array = [Yawning,Dance,Real_modle,Cat,After_shower,Landscape,Kiss];
  var img_name_array = ["Yawning","Dance","Real_modle","Cat","After_shower","Landscape","Kiss"]
  var img_description = [" Mixing a self-portrait and other element together to complete an art work.",
                          "A work copied from a photo called \"Two ballet dancers.\".",
                          "The first real-model sketch, in class practice.",
                          "A work copied from a photo long time age. Just for testing.",
                          "A girl just drying herself after taking a shower.",
                          "Take a break from the busy daily life,and enjoy the sunset, giving a feel of relax.",
                          "Do you want a kiss? Practice hair drawing with a seductive girl."]
  var img_material = ["Drawing pencil, 2018.","Drawing pencil, 2019.","Drawing pencil, charcoal, 2017.","Non-drawing pencil, 2016.",
                      "Photoshop, 2018.","Painter, Drawing tablet, 2017.","Painter, 2016."]
  
  const [open, setOpen] = useState(false);
  const [viewedImg, setViewed] = useState();

  const handleOnClick = (index)=> {
    setViewed(img_array[index]);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <Container>
     <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
      >
        <Paper in={open} >
         <img src = {viewedImg} height="650" alt=""/>
        </Paper>
      </Modal>
     <Grid container spacing={3}>
      {
      img_array.map (number => {
      return<Grid item sm={3} key = {number} >
      <Card className="card" >
      <CardActionArea onClick={e=>{handleOnClick(img_array.indexOf(number));handleOpen()}}>
        <CardMedia
          component="img"
          // alt="Yawning"
          height="150"
          image={number}
          // title="Yawning"
        />
        <CardContent>
          <Typography  variant="h5" component="h2">
            {img_name_array[img_array.indexOf(number)]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {img_description[img_array.indexOf(number)]}<br/>
           By: {img_material[img_array.indexOf(number)]}  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
})}
    </Grid>
   </Container>
  );
}

export default MyArt;