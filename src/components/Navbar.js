import React, {useState} from  'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box

} from "@material-ui/core";

import {
    ArrowBackIos,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    ClearAll
    

} from "@material-ui/icons";
import avatar from "../name.png"
 

//css styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
    width: 250,
    height:"100%",
    background: '#511',
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem: {
        color:"tan"
    }
  }));

  const menuItems = [
      {
          listIcons: <Home/>,
          listText: "Home",
          listPath: "/"
      },
      {
        listIcons: <AssignmentInd/>,
        listText: "Experience",
        listPath: "/experience"
    },
    {
        listIcons: <ClearAll/>,
        listText: "Skills",
        listPath: "/skill"
    },
    {
        listIcons: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcons: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    },
     
  ]

function Navbar() {

    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles();
    

    const sideList = slider => (
        <Box
         className={classes.menuSliderContainer} 
         component="div"  onClick={toggleSlider(slider, false)}>
        
         
        <Avatar className={classes.avatar} src={avatar} alt="any type" />
        <Divider/>
            <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcons}
                        
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
            </List>

        </Box>

    );
    return (
    <>
       

        <Box component="nav">
         <AppBar position="static" style={{ background: "#222"}}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
                <ArrowBackIos  style={{ color: "tomato"}}/> 
            </IconButton>
            <Typography variant="h5" style={{color: "tan",  cursor: "pointer"}} onClick={toggleSlider("right", true)}>Portfolio</Typography>
            <MobilRightMenuSlider
                anchor="right"
                open={state.right}
                onClose={toggleSlider("right", false)}
            >
                {sideList("right")}
                <Footer/>
            </MobilRightMenuSlider>
          </Toolbar>
         </AppBar>
        </Box>
    </>
    )
}

export default Navbar
