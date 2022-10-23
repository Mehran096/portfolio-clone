import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,  Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
      background: '#233',
       
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"

        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
                
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"

            }
        }
    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none",

            }
        }
    },

    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
  }));

function Experience() {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                        Online Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    In the web designing I have used photoshop, CSS3, Bootstrap 4 5. I have designed a lot's of single page websites,
                     multi-page websites and designed multiple Portfolio for the friends and other people.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Development
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                        Online Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                       I have created facebook clone, whatsapp clone, e-commerce websites and others. In the 
                       web development I have used React js, React Redux, material-ui,  PHP, Laravel.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020-2021
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       MERN Stack
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                        Online Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                       In the MERN Stack I have created 5 projects Flipkart clone, chatting apps and others.
                       In the first project (flipkart clone) I have gained a lot's of knowledge that how we created API in MERN stack
                       and how we handle it and how we testing it in the Postman. This was a very large project but not responsive, not responsive
                       but I have learned a lot's of things that how we debugging the code, multiple APIs, Redux handling, connection of nodejs with reactjs 
                        and so on.  
                    </Typography>
                </Box>
                 
            </Box>
        </Box>

        
      </>   
    )
}

export default Experience
