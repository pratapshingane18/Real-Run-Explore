import React from 'react';
import { CssBaseline, Grid} from '@material-ui/core';

import Header from './components/Headers/Header';
import Map from './Components/Map/Map';
import List from './Components/List/List';

const App = () =>{
    return (
       <>
       
       <CssBaseline />
       <Header />
       <Grid container spacing ={3}  style={{width:'100%'}}>
        <Grid item xs={12} ms={4}>
        <List />
        </Grid>
        <Grid item xs={12} ms={8}>
            <Map />

         </Grid>
            
       </Grid>
       </>
    );
}

export default App;