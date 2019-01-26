import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchList} from "./searchList";
import {TrackDetails} from "./trackDetails";

class App extends Component {
  constructor(){
    super();
    this.state={
      screen:"searchList",
      searchData:null,
      clickedTrack:null,
      search:""
    }
  }
  render() {
    return (
      <div className="App" style={{
        width:"100%",
        minHeight:"100vh",
        backgroundColor:"#2196f3"
      }}>
        {this.state.screen==="searchList"?<SearchList 
        clicked={(track)=>{
          this.setState({clickedTrack:track});
          localStorage.clear();
          localStorage.setItem("selectedTrack",JSON.stringify(track));
          this.setState({screen:"trackDetails"})
        }}
        newResults={(newD)=>{this.setState({searchData:newD})}} 
        newSearch={(s)=>{this.setState({search:s})}}
        search={this.state.search}
        list={this.state.searchData} />
        :<TrackDetails back={()=>{
          this.setState({screen:"searchList"})
        }}/>}
       
      </div>
    );
  }
}

export default App;
