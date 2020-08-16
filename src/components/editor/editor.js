import React from 'react';
import cookie from 'react-cookies';
import '../../css/index.css';

export default class Text extends React.Component {
    render() {
        const textarea = {
            resize: "none",
            padding: "10px 10px",
            width: "100%",
            height: "50vh",
            marginLeft: "-10px",
            fontSize: parseInt(this.props.fontSize),
            color: this.props.color,
            textAlign: this.props.textAlign,
            border: "1.5px solid black",
            borderRadius: "15px",
            backgroundColor: this.props.backgroundColor,
            outline: "none"
        }
        return (
            <div className="uk-first-column uk-height-large uk-width-expand@s">
                <div className="uk-card uk-card-default uk-card-body">
                    <p className="uk-text-large uk-text-bold">Text Editor</p>
                    <div>
                        <textarea style={textarea} id="text"
                            defaultValue={
                                cookie.load('data') ? cookie.load('data').text : ""
                            }>
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}