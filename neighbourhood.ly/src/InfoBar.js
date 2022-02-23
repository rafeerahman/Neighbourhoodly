import React from 'react';
import './App.css';


class InfoBar extends React.Component {
    render() {
        return (
        <div id="infoBar">
          <div className="title">
            Neighbourhood.ly
          </div>
          <div className="description">
            Get the latest reviews of neighbourhoods in the city of Toronto.
          </div>
        </div>
        )
    }
}

export default InfoBar;