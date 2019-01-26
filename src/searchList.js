import React from "react";
import axios from "axios";

export class SearchList extends React.Component{

    constructor(){
        super();
      
    }
    getDerived
    searchForAnArtist(){
        let url=`https://itunes.apple.com/search?term=${this.props.search}&media=music&limit=25&attribute=artistTerm`
        let options={
            method:"GET",
            url:url

        }
        axios(options).then((resp)=>{
            console.log(resp);
            this.props.newResults(resp.data.results)
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        let search={
            padding:"10px",
            backgroundColor:"#0080e6",
            border:"none",
            color:"white",
            fontWeight:"bold",
            marginRight:"10px",
            height:"20px"
        }
        return(
            <div style={{backgroundColor:"#2196f3", display:"flex",flexDirection:"column", justifyContent:"center", minHeight:"100vh", padding:"10px"}}>
                <div style={{padding:"20px"}}>
                    <input className="search" style={search} type="text" placeholder="Search for an artist's works" value={this.props.search} onChange={(e)=>{
                        this.props.newSearch(e.target.value);
                    }}/>
                    <button style={{hright:"20px", padding:"10px", backgroundColor:"#0080e6", color:"white", border:"none", fontWeight:"bold", cursor:"pointer"}} onClick={this.searchForAnArtist.bind(this)}>Search</button>
                </div>
                <div>
                    {this.props.list?
                        this.props.list.map((track)=>{
                            return(
                                <div onClick={()=>{
                                    this.props.clicked(track);
                                }} style={{cursor:"pointer",minHeight:"110px",display:"flex", flexDirection:"row",cursor:"pointer",backgroundColor:"white", padding:"10px", marginBottom:"10px"}}>
                                    <div>
                                        <img src={track.artworkUrl100}/>
                                    </div>
                                    <div style={{marginLeft:"10px", textAlign:"left"}}>
                                        <div style={{fontWeight:"bold", color:"#2196f3"}}>{track.trackName}</div>
                                        <div style={{fontStyle:"italics", fontWeight:"bold", color:"#646464"}}> {"By "+track.artistName}</div>
                                        {track.collectionName?<div>{"from "+track.collectionName}</div>:null}
                                    </div> 
                                </div>
                            )
                        })
                    :null}
                </div>
            </div>
        )
    }
}