import React from 'react';

export default class Options extends React.Component {
    render() {
        return (
            <div className="uk-form-stacked">
                <div className="uk-margin uk-width-expand">
                    <div className="uk-child-width-expand">
                        <div className="uk-form-controls">
                            <label className="uk-text-left uk-form-label">Top Text</label>
                            <input className="uk-input uk-width-expand"
                                onKeyUp={this.props.up} id="input_up" type="text" placeholder="Top text here" />
                        </div>
                        <div className="uk-form-controls">
                            <label className="uk-text-left uk-form-label">Bottom text</label>
                            <input className="uk-input uk-width-expand"
                                onKeyUp={this.props.down} id="input_down" type="text" placeholder="Bottom text here" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}