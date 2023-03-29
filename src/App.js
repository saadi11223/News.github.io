import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
// import Newsitem from './component/Newsitem';

export class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=> 
  {
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress }
        // onLoaderFinished={() => setProgress(0)}
      />
      {/* <News setProgress={this.setProgress} pageSize={6} country="us" category= "sports"/> */}
      {/* <News setProgress={this.setProgress} /> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path="/Sport"  category="sports" element={<sports />}></Route> */}
        <Route path="/"   element=<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category= "general"/> ></Route>
        <Route path="/Business"   element={<News setProgress={this.setProgress} key="business" pageSize={6} country="us" category= "business"/>} ></Route>
        <Route path="/Health"   element={<News setProgress={this.setProgress} key="health" pageSize={6} country="us" category= "health"/> }> </Route>
        <Route path="/Technology"   element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="us" category= "technology"/>} ></Route>
        <Route path="/Sports"   element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="us" category= "sports"/> }></Route>
        <Route path="/General"   element={<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category= "general"/> }></Route>

        
        </Routes>
       
    </BrowserRouter>
   
        {/* <News setProgress={this.setProgress}item/> */}
      </div>
    )
  }
}

export default App
