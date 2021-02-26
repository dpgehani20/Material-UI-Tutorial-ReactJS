import React from 'react';

import Cakecard from './Cakecard';
import {Grid} from '@material-ui/core'

import cakeInfoList from './constants';

const Content = () => {
    const getCakeMakerCard = (cakeMakerObj) =>{
        return (
            <Cakecard {...cakeMakerObj}/>
        )
    };


    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                {cakeInfoList.map(cakeMakerObj => getCakeMakerCard(cakeMakerObj))}
            </Grid>
            
        </Grid>
    );
}

export default Content;