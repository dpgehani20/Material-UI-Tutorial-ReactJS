import React from 'react';

import {Box,Button} from '@material-ui/core'
import {Container} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import {Hidden} from '@material-ui/core'


const Layoutt = () =>{
    return (
        <div>
            <div>
            <h2>Box| Layout| Material UI</h2>
            <Box clone style = {{color:'red'}} m={3}>
            <Button>Click Me</Button>
            </Box>
            </div>

            <div>
            <hr></hr>
            <h2>Container| Layout| Material UI</h2>
            <Container maxWidth ="xs" style={{backgroundColor:'aqua'}}>
                <h5>Container</h5>
            </Container>
            <Container maxWidth ="sm" style={{backgroundColor:'aqua'}}>
                <h5>Container</h5>
            </Container>
            <Container maxWidth ="md" style={{backgroundColor:'aqua'}}>
                <h5>Container</h5>
            </Container>
            <Container maxWidth ="lg" style={{backgroundColor:'aqua'}}>
                <h5>Container</h5>
            </Container>
            <Container fixed style={{backgroundColor:'aqua'}}>
                <h5>Container| fixed</h5>
            </Container>
            </div>

            <div>
            <hr></hr>
            <h2>Grid| Layout| Material UI</h2>
            {/* <Grid lg={12} item container spacing={5}>
                <Grid item lg={3} xs={12}><h5 style={{backgroundColor:'green'}}>Block 1</h5></Grid>
                <Grid item lg={3} xs={12}><h5 style={{backgroundColor:'green'}}>Block 2</h5></Grid>
                <Grid item lg={3} xs={12}><h5 style={{backgroundColor:'green'}}>Block 3</h5></Grid>
                <Grid item lg={3} xs={12}><h5 style={{backgroundColor:'green'}}>Block 4</h5></Grid>
            </Grid> */}
            </div>
            <div>
            <hr></hr>
            <h2>Hidden| Layout| Material UI</h2>
            <Grid container item xs={12} spacing = {12}>
            <Grid  lg={3} sm ={12} xs={12} item><h5 style={{backgroundColor:'blue'}}>Block 1</h5></Grid>
            <Grid  lg={3} sm ={12} xs={12} item><h5 style={{backgroundColor:'blue'}}>Block 2</h5></Grid>
            <Hidden only ={['xs','lg']}><h5 style={{backgroundColor:'blue', flex: 1}}>Block 3</h5></Hidden>
            <Grid  lg={3} sm ={12} xs={12} item><h5 style={{backgroundColor:'blue'}}>Block 4</h5></Grid>
            </Grid>
            </div>
        </div>
    );
};

export default Layoutt;