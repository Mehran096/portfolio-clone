import React from 'react';
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    Grid,
    Box, 
    CardActionArea, 
    CardActions,
    CardContent,
    CardMedia,
    Button
 } from "@material-ui/core";
 import project1 from "../images/flipkart.png";
 import project2 from "../images/flipkart-clone.png";
 import project3 from "../images/chat.jpg";
 import project4 from "../images/Whatsapp.jpg";
 import project5 from "../images/medium.png";
 import project6 from "../images/todo.jpg";
 import project7 from "../images/add.jpg";
 import project8 from "../images/psp.png";
 import project9 from "../images/admin.jpg";
 

 const useStyles = makeStyles({
    mainContainer: {
      //background:  "#233",
       height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
         
        margin: "3rem auto"
    }
  });
  

function Portfolio() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar/> 
        <Grid container justify="center">
            {/* project 1 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project1}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 1
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            it's an admin part of flipkart clone but it's not responsive. You can check source code 
                            on any device but demo not, demo check on full screen
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a href="https://hopeful-wilson-a18d2a.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/ecommerce-flipkart-admin"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 2 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project2}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 2
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a client part of flipkart clone but it's not responsive. You can check source code 
                            on any device but demo not, demo check on full screen
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://tender-benz-03cc1b.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/ecommerce-flipkart-client"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 3 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project3}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 3
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                             it's a reactjs chat app creating on chatengine.io. chatengine is amazing
                             for the beginner to create a real time chat app.
                             <div className="pass-f">Username:basit</div>
                             <div className="pass-f">Password:321321</div>
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://compassionate-sammet-e724b4.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/reactjs-chat-app"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 4 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project4}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 4
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a WhatsApp clone created on MERN. In this project used pusher for handle the messages. And 
                        i learned about the pusher that how we used it in backend and frontend.
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://epic-mcnulty-2e0f89.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/whatsapp-clone-MERN"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 4 */}
            {/* project 5 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project5}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 5
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a Medium.com clone created on MERN. In this project used redux for handle the states very easily. In this
                        project I have Created 3 API with itself and I have learned very well that how we used and created the API in MERN Stack
                         
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://mern-blog-like-medium.herokuapp.com/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/MERN-Blog-Like-Medium.com"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 5 */}
            {/* project 6 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project6}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 6
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a Todo App with reduxtoolkit. In this project used reduxtoolkit for handle the data and framer motion used for 
                         the animation.
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://jolly-villani-cb25c7.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/Todo-App-reduxtoolkit"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 6 */}
            {/* project 7 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project7}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 7
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's an add to card shopping card App with redux. In this project used redux for handle the data 
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://modest-mayer-c9cadf.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/Add-To-Card-With-Redux"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 7 */}
             {/* project 8 */}
             <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project8}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 8
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        simple crud, search and toggle operation with pure redux
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://keen-albattani-92e170.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/simple-crud-with-redux"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 8 */}
            {/* project 9 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project9}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 9
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        React admin-dashboard
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://magnificent-malasada-dcfb66.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/Admin-dashboard"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 9 */}
             
        </Grid>
            
        </Box>
    )
}

export default Portfolio
