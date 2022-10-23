import React from 'react';
import {  makeStyles} from '@material-ui/styles';
 
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
  
 import FacebookIcon from '@material-ui/icons/Facebook';
 import LinkedInIcon from '@material-ui/icons/LinkedIn';
 import GitHubIcon from '@material-ui/icons/GitHub';
 
// import { Facebook } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      "& .MuiButtomNavigationAction-root": {
          minWidth: 0,
          maxWidth: 250
      },
      "& .MuiSvgIcon-root": {
          fill: "tan",
          "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
          }
      }
       
      
    },
  });

   

function Footer() {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<FacebookIcon/>}
            /> 
            <a href="https://www.linkedin.com/in/mehran-hussain-0147b7204/" style={{display:"Block", marginTop:"15px"}}>
            <BottomNavigationAction 
            className={classes.root}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
                 
            /> 
            </a>
            <a href="https://github.com/Mehran096" style={{display:"Block", marginTop:"14px"}}> 
             <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHubIcon/>}
                
            /> 
            </a>
             
        </BottomNavigation>
    )
}

export default Footer
// to= "https://github.com/Mehran096"