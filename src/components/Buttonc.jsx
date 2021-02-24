import React,{useState} from 'react';

import {Button, ButtonGroup} from '@material-ui/core'
import CheckBox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Slider from '@material-ui/core/Slider'


const Buttonc = () =>{
    const [gender, setGender] = useState("female")

    const handleGender = (e) =>{
        console.warn(e.target.value)
        setGender(e.target.value)
    }

    const [name, setName] = useState([])
    const getcheckValue = (e) => {
        let data = name;
        data.push(e.target.value)
    }

    const slidermake = [
        {
            value: 0,
            label:"start"
        },
        {
            value: 100,
            label:"middle"
        },
        {
            value: 200,
            label:"end"
        }
    ]

    const [rangeval,setRangeval] = useState([30,40])
    const updateRange = (e,data) =>{
        setRangeval(data)
    }

    return(
        <div>
        <h1>Button</h1>
        <Button
        color = "primary"
        variant ="outlined"
        onClick = {() => alert("button clicked")}
        >
            Material UI
        </Button>
        <hr></hr>
        <h1>Button Group</h1>
        <ButtonGroup orientation ="vertical" color="secondary" variant="contained">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <hr></hr>
        <h1>Radio Button</h1>
        <div>
            <span>Male</span>
            <Radio value="male" checked={gender==="male"} onChange={handleGender}/>
            <span>Female</span>
            <Radio value="female" checked={gender==="female"} onChange={handleGender}/>
            <span>Other</span>
            <Radio value="other" checked={gender==="other"} onChange={handleGender}/>
        </div>

        <hr></hr>
        <h1>CheckBox</h1>
        <div>
        G :<CheckBox value="gehani" onChange = {(e) =>getcheckValue(e)}/>
        N :<CheckBox value="nathasha" onChange = {(e) =>getcheckValue(e)}/>
        M :<CheckBox value="thisumi" onChange = {(e) =>getcheckValue(e)}/>
        </div>

        <hr></hr>
        <h1>Slider</h1>
        {/* <div style={{width: 300, margin:30}}> */}
            {/* for vertical */}
         <div style={{height: 300, margin:30}}>
        <Slider 
         color ="primary"
         defaultValue = {50}
         max ={200}
         step ={20}
         marks = {slidermake}
         valueLabelDisplay = "auto"
        //  onChange={getValue}
        orientation ="vertical"
        />
        </div>

        <hr></hr>
        <h1>Range Slider</h1>
        <div style={{width:300, margin:30}}>
            <Slider value= {rangeval} onChange = {updateRange}/>
        </div>
        </div>
    );
};

export default Buttonc;