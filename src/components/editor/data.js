import React from 'react';
import cookie from 'react-cookies';
import '../../css/index.css';
import Text from './editor';

export default class Data extends React.Component {
    dataCookie = cookie.load('data');
    constructor(props) {
        super(props);
        this.state = {
            color: this.dataCookie ? this.dataCookie.color : "#000",
            backgroundColor: this.dataCookie ? this.dataCookie.backgroundColor : "#fff",
            size: this.dataCookie ? this.dataCookie.size : 14,
            textAlign: this.dataCookie ? this.dataCookie.align : 'left',
        }
        this.handleSize = this.handleSize.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleBGColor = this.handleBGColor.bind(this);
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
    handleBGColor(event) {
        const target = event.target;
        this.setState({
            backgroundColor: target.value,
        });
    }
    saveText(editor = 0) {
        const data = {
            text: document.getElementById('text').value,
            size: this.state.size,
            color: this.state.color,
            backgroundColor: this.state.backgroundColor,
            align: this.state.textAlign
        }
        cookie.save("data", data, {
            path: "/"
        });
    }
    render() {
        return (
            <div className="uk-padding-large uk-text-center uk-grid" uk-grid="">
                <Text
                    key="text" backgroundColor={this.state.backgroundColor}
                    color={this.state.color} fontSize={this.state.size} textAlign={this.state.textAlign} />
                <div ref={this.text} className="uk-first-column uk-height-large uk-width-1-4@m" style={{ marginTop: "50px" }}>
                    <div className="uk-card uk-card-default uk-card-body">
                        <div className="uk-form-stacked">
                            <div className="uk-margin uk-width-expand">
                                <div className="uk-child-width-1-2@s uk-grid-small" uk-grid="">
                                    <div className="uk-form-controls">
                                        <label className="uk-text-left uk-form-label">Font Size</label>
                                        <input className="uk-input" minLength="1" min="1"
                                            max="100" step="1" value={this.state.size}
                                            onChange={this.handleSize} type="number" />
                                    </div>
                                    <div className="uk-form-controls">
                                        <label className="uk-text-left uk-form-label">Text Align</label>
                                        <select key="align" className=" uk-width-1-1"
                                            defaultValue={this.state.textAlign} onChange={this.handleTextAlign}>
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
                                        onChange={this.handleColor} value={this.state.color} />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-text-left uk-form-label">Background Color</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" key="bgcolor" type="color"
                                        onChange={this.handleBGColor} value={this.state.backgroundColor} />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-button uk-button-primary" id="save" key="save" type="button"
                                        value={"Save"} onClick={() => this.saveText(1)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}