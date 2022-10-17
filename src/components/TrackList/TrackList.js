import React from "react"
import Track from "../Track/Track"
import "./trackList.css"

class TrackList extends React.Component {
  render() {
    return (
      <div className="trackList">
        {this.props.tracks.map((track) => {
          return <Track track={track} key={track.id} />
        })}
      </div>
    )
  }
}
export default TrackList
