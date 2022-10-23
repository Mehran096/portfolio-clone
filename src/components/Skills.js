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

function Skills() {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Skills
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        HTML
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                        Hypertext markup language
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, 
                    and hyperlink effects on World Wide Web pages.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        CSS
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                        Cascading Style Sheet
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages.
                     HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        JAVASCRIPT
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    object-oriented computer programming language
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    JavaScript is a programming language commonly used in web development.
                     It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. ... Like
                      server-side scripting languages, such as PHP and ASP, JavaScript code can be inserted anywhere within the HTML of a webpage.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       PHP
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    Hypertext Preprocessor
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    The define() function defines a constant. Constants are much like variables,
                     except for the following differences: A constant's value cannot be changed after it is set.
                     Constant names do not need a leading dollar sign ($) Constants can be accessed regardless of scope.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       LARAVEL
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    web application framework
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    Laravel is primarily used for building custom web apps using PHP.
                     It's a web framework that handles many things that are annoying to build yourself,
                     such as routing, templating HTML, and authentication. 
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       react JS
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    JavaScript library
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    React. js is an open-source JavaScript library that is used for
                     building user interfaces specifically for single-page applications.
                     It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       NODE  JS
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    JavaScript back-end 
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    Node. js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                     Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       EXPRESS JS
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    Node.js web application framework
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    Express. js is a free and open-source web application framework for Node. js.
                     It is used for designing and building web applications quickly and easily.
                      Web applications are web apps that you can run on a web browser.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       MONGODB
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    DATABASE
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema.
                     It means you can store your records without worrying about the data structure such as the number of 
                     fields or types of fields to store values.
                     MongoDB documents are similar to JSON objects.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       MYSQL
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    DATABASE
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    MySQL is a relational database management system based on SQL – Structured Query Language.
                     The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.
                      The most common use for mySQL however,
                     is for the purpose of a web database.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        ECMAScript
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    European Computer Manufacturers Association Script
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    This edition of ECMAScript changed its name from ES6 to ES2015 because in
                     2015 Ecma International decided to switch to annual releases of ECMAScript. Accordingly, 
                    Ecma International also started to name new editions of the ECMAScript specification based on the year they are released.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        BOOTSTRAP
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    Front-end framework
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    Bootstrap is a potent front-end framework used to create modern websites and web apps.
                     It's open-source and free to use, yet features numerous HTML and CSS templates for UI
                      interface elements such as buttons and forms.
                     Bootstrap also supports JavaScript extensions.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        NEXT JS
                    </Typography>
                    <Typography variant="body1" align="center" style= {{color: "tomato"}}>
                    JavaScript framework
                    </Typography>
                    <Typography variant="subtitle1" align="center" style= {{color: "tan"}}>
                    It lets you build server-side rendering and static web applications using React. 
                    It's a great tool to build your next website. It has many great features and advantages,
                     which can make Nextjs your first option for building your next web application.
                    </Typography>
                </Box>
            </Box>
        </Box>
        
      </>   
    )
}

export default Skills
