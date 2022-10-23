import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
 
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmailIcon from '@material-ui/icons/Email';
import project1 from "../images/contact.jpg";
 

import Navbar from './Navbar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 auto",
    top: "50%",
    left:"50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",

     
  },
  media: {
    height: 140,
  },
   
});

export default function Contacts() {
  const classes = useStyles();

  return (
      <>
    
<Box  component="div"> 
    <Navbar/>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"green"}}>
             <span>+923112764875</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            click below on button (EMAIL ME) to send email
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{  border: "none", background:"rgba(199, 0, 0, 0.1)", width: "100%"}} >
        <EmailIcon /> <a href="mailto:mehranh91309@gmail.com" style={{ textDecoration: "none"}}>email me</a>
        </Button>
        {/* <Button size="small" color="primary">
        <a href="mailto:mehranh91309@gmail.com">
          <EmailIcon /> 
          </a>
        </Button> */}
      </CardActions>
    </Card>
    
    </Box>
    </>
  );
}

































// import React from 'react';

// import { makeStyles, withStyles} from '@material-ui/core/styles';
// import {
//     Typography,
//     TextField,
//     Grid,
//     Box, 
//     Button
     
//  } from "@material-ui/core";
//  import Navbar from "./Navbar";
//  import SendIcon from "@material-ui/icons/Send";

//  const useStyles = makeStyles(theme => ({
//     form: {
//     top: "50%",
//     left:"50%",
//     position: "absolute",
//     transform: "translate(-50%, -50%)"
//     },
//     button: {
//         marginTop: "1rem",
//         color: "tomato",
//         borderColor: "tomato"
//     }
     
//   }));


// const InputField = withStyles({
//     root: {
//       "& label.Mui-focused": {
//           color: "tomato",
//       },
//       "& label": {
//           color: "tan",
//       },
//       "& .MuiOutlinedInput-root": {
//           "& fieldset": {
//               borderColor: "tan",
//           },
//           "&:hover fieldset": {
//               borderColor: "tan",
//           },
//           "& .Mui-focused fieldset": {
//             borderColor: "tan",

//           }
//       }
//     },
//   })(TextField);

// function Contacts() {
//     const classes = useStyles();
//     return (
//         <Box component="div">
//             <Navbar/> 
//             <Grid container justify="center">
//                 <Box component="form" className={classes.form}>
//                     <Typography variant="h5" style={{color:"tomato", textAlign: "center", textTransform:"uppercase"}}>
//                         hire or contact me...
//                     </Typography>
//                     <InputField 
//                         fullWidth={true}
//                         label="Name"
//                         variant="outlined"
//                         inputProps={{style: { color: "white"}}}
//                         margin="dense"
//                         size="medium"
//                     /> 
//                     <br />
//                     <InputField 
//                         fullWidth={true}
//                         label="Email"
//                         variant="outlined"
//                         inputProps={{style: { color: "white"}}}
//                         margin="dense"
//                         size="medium"
//                     /> 
//                     <br />
//                     <InputField 
//                         fullWidth={true}
//                         label="Company name"
//                         variant="outlined"
//                         inputProps={{style: { color: "white"}}}
//                         margin="dense"
//                         size="medium"
//                     /> 
//                     <br />
//                     <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
//                         contact me
//                     </Button>
//                 </Box>
//             </Grid>
//         </Box>
//     )
// }

// export default Contacts
