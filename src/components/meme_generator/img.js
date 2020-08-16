import React from 'react';
import '../../css/index.css'

export default class Img extends React.Component {
    render() {
        return (
            <div className="img-container" id="img">
                <p id="up" className="up" >{this.props.up}</p>
                <img className="img" src={this.props.meme} alt="" />
                <p id="down" className="down">{this.props.down}</p>
            </div>
        );
    }
}