import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/app';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actual: 'editor'
        }
    }

    render() {
        return (
            <div>
                <div className="uk-text-center">
                    <button className="uk-margin-left uk-margin-top uk-button-primary uk-button"
                        onClick={() => {
                            this.setState({ actual: 'editor' });
                        }}>
                        Editor
                    </button>
                    <button className="uk-margin-left uk-margin-top uk-button-primary uk-button"
                        onClick={() => {
                            this.setState({ actual: 'meme' });
                            if(document.getElementById('save')) document.getElementById('save').click();
                        }}>
                        Meme Generator
                    </button>
                </div>
                <App actual={this.state.actual} />
            </div>
        );
    }
}

ReactDOM.render(
    <Select />,
    document.getElementById('root')
);