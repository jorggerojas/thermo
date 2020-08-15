import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import './index.css';

class Text extends React.Component{
    render(){
        const textarea = {
            resize: "none",
            padding: "10px 10px",
            width: "100%",
            height: "50vh",
            marginLeft: "-10px",
            fontSize: parseInt(this.props.fontSize),
            color: this.props.color,
            textAlign: this.props.textAlign
        }
        return (
            <div className="uk-first-column uk-height-large uk-width-expand@s">
                <div className="uk-card uk-card-default uk-card-body">
                    <p className="uk-text-large">Document</p>
                    <div>
                        <textarea style={textarea} id="text"
                         defaultValue = {
                             cookie.load('data').text ? cookie.load('data').text : ""
                         }>
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

class Data extends React.Component{
    dataCookie = cookie.load('data');
    constructor(props) {
        super(props);
        this.state = {
            color: this.dataCookie ? this.dataCookie.color :  "#000",
            size: this.dataCookie ? this.dataCookie.size : 14,
            textAlign: this.dataCookie ? this.dataCookie.align : 'left'
        }
        this.handleSize = this.handleSize.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleTextAlign = this.handleTextAlign.bind(this);
    }
    handleSize(event) {
        const target = event.target;
        this.setState({
            size: target.value > 0 ? (target.value < 100 ? target.value : 100) : 1,
        });
    }
    handleTextAlign(event) {
        const target = event.target;
        this.setState({
            textAlign: target.value,
        });
    }
    handleColor(event) {
        const target = event.target;
        this.setState({
            color: target.value,
        });
    }
    saveText(){
        const data = {
            text: document.getElementById('text').value,
            size: this.state.size,
            color: this.state.color,
            align: this.state.textAlign
        }
        cookie.save("data", data, {
            path: "/"
        });
       alert("TEXT SAVED!");

    }
    render(){
        return (
            <div className="uk-padding-large uk-text-center uk-grid" uk-grid="">
                <Text
                 key="text" color={this.state.color} fontSize={this.state.size} textAlign={this.state.textAlign}/>
                <div ref={this.text} className="uk-first-column uk-height-large uk-width-1-4@s" style={{marginTop:"100px"}}>
                    <div className="uk-card uk-card-default uk-card-body">
                        <div className="uk-form-stacked">
                            <div className="uk-margin uk-width-expand">
                                <div className="uk-child-width-1-2@m uk-grid-small" uk-grid="">
                                    <div className="uk-form-controls">
                                        <label className="uk-text-left uk-form-label">Font Size</label>
                                        <input className="uk-input" minLength="1" min="1"
                                            max="100" step="1" value={this.state.size}
                                            onChange={this.handleSize} type="number"/>
                                    </div>
                                    <div className="uk-form-controls">
                                        <label className="uk-text-left uk-form-label">Text Align</label>
                                        <select key="align" defaultValue="left" onChange={this.handleTextAlign}>
                                            <option value="left">LEFT</option>
                                            <option value="center">CENTER</option>
                                            <option value="right">RIGHT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-text-left uk-form-label">Font Color</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" key="color" type="color"
                                    onChange={this.handleColor} value={this.state.color}/>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-button uk-button-primary" key="save" type="button"
                                    value={"Save"} onClick={()=>this.saveText()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Data />,
  document.getElementById('root')
);