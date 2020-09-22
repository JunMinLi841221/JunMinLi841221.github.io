import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'; 
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import '../css/Home.css'

function Footer() {
  return (
    <Container>

     <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        JunMin Li.<br/> Last updated Sep
      {'           '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
}

export default Footer;
