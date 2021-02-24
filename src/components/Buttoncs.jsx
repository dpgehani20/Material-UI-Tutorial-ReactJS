import React from 'react';

import {Select, MenuItem} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {Switch} from '@material-ui/core'

const Buttoncs = () =>{

    const [course,setCourse] = React.useState(0)
    const updateSelectVal = (e) =>{
        setCourse(e.target.value)
    }

    // const getDataForm = (e) =>{
    //     console.warm(e.target.value)
    // }

    const getSwithVal = (e, val) => {
        console.log(val)
    }
    return (
        <div>
            <div>
            <h2>Select Box or Select</h2>
            <Select value={course} displayEmpty onChange={updateSelectVal}>
            <MenuItem value={0} disabled>Select</MenuItem>
                <MenuItem value={1}>Node</MenuItem>
                <MenuItem value={2}>Java</MenuItem>
                <MenuItem value={3}>JS</MenuItem>
                <MenuItem value={4}>PHP</MenuItem>
            </Select>
            </div>
            <div>
                <br></br>
                <hr></hr>
                <h2>Text field</h2>
                <TextField 
                label = "Enter name"
                color ="secondary"
                variant = "outlined"
                // multiline
                // type ="number"
                // type ="password"
                // onChange = {getDataForm}
                />
            </div>

            <div>
            <br></br>
                <hr></hr>
                <h2>Swith</h2>
                <Switch 
                color = "primary"
                size= "small"
                onChange = {getSwithVal}
                />
            </div> 
        </div>
    );
};

export default Buttoncs;