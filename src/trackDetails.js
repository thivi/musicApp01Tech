import React from "react";

export class TrackDetails extends React.Component{
    render(){
        let track=JSON.parse(localStorage.getItem("selectedTrack"));

        return(
            <div style={{minHeight:"100vh"}}>
                <div style={{height:"30px", color:"white",  cursor:"pointer",fontWeight:"bold", textAlign:"left", borderBottom:"solid 1px white", padding:"10px"}} onClick={()=>{
                    
                    this.props.back();
                }}>Back</div>
                {track?
                    <div style={{minHeight:"calc(100vh - 51px)",color:"white", fontWeight:"bold", fontSize:"1.2em", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                        <div >
                            <img src={track.artworkUrl100}/>

                        </div>
                        <div style={{textAlign:"left",margin:"10px"}}>
                            <div>
                                {track.trackName}
                            </div>
                            <div>
                                {track.collectionName}
                            </div>
                            <div>
                                {track.artistName}
                            </div>
                            <div>
                                {track.trackPrice+" "+track.currency}
                            </div>
                            <div>
                               {new Date(track.releaseDate).toLocaleDateString("en-US",{
                                   day:"2-digit",
                                   month:"2-digit",
                                   year:"numeric",
                                   hour:"2-digit",
                                   minute:"2-digit"
                               })}
                            </div>
                        </div>
                    </div>
                :null}
            </div>
        )
    }
}