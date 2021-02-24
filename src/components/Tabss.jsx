import React from 'react';

import {Tabs,Tab, AppBar} from '@material-ui/core'

const Tabss = () => {
    const [value,setValue] = React.useState(0)
    const handleTabs = (e,val) =>{
        console.log(val)
        setValue(val)
    }
    return (
        <div>
            <h1>Tabs</h1>
            <AppBar position="static">
                <Tabs value={value}  onChange={handleTabs}>
                    <Tab label="item 1" />
                    <Tab label="item 2" />
                    <Tab label="item 3" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>item 1 detail</TabPanel>
            <TabPanel value={value} index={1}>item 2 detail</TabPanel>
            <TabPanel value={value} index={2}>item 3 detail</TabPanel>
        </div>
    );

    function TabPanel(props) 
    {
    const {children, value, index} = props;
        return (
            <div>
                {
                    value === index && (
                        <h5>{children}</h5>
                    )
                }
            </div>
        );
    }
};

export default Tabss;

//with appbar and also without