import React from 'react';
import Options from './options';
import Img from './img';
import { Printd } from 'printd'

export default class Meme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: [],
            img: "",
            up: "",
            down: "",
        }
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.loadMeme = this.loadMeme.bind(this);
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes', {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        })
            .then(data =>
                data.json()
            )
            .then(response => {
                if (response.success) {
                    const { memes } = response.data;
                    let random = Math.floor(
                        Math.random() * memes.length
                    );
                    this.setState({ memes: memes });
                    this.setState({ img: this.state.memes[random].url.toString() });
                } else {
                    alert("This app couldn't load network images");
                }
            })
            .catch(error => {
                console.log(error);
                alert("This app couldn't load network images");
            })
    }
    handleUp(event) {
        const target = event.target;
        this.setState({
            up: target.value.length <= 24 ? target.value : target.value.substring(0, 24),
        });
    }
    handleDown(event) {
        const target = event.target;
        this.setState({
            down: target.value.length <= 24 ? target.value : target.value.substring(0, 24),
        });
    }
    loadMeme() {
        let random = Math.floor(
            Math.random() * this.state.memes.length
        );
        this.setState({
            img: this.state.memes[random].url.toString(),
            up: "",
            down: ""
        });
        document.getElementById('input_up').value = "";
        document.getElementById('input_down').value = "";
    }
    render() {
        return (
            <div className="uk-padding-large uk-text-center uk-grid uk-height-large" uk-grid="">
                <div className="uk-first-column uk-height-large uk-width-expand@s large uk-overflow-auto">
                    <div className="uk-card uk-card-default uk-card-body" uk-overflow="">
                        <p className="uk-text-large uk-text-bold">Meme Generator</p>
                        <p className="uk-text-meta">
                            Idea from
                             <a className="uk-text-link" href="http://demo14.downloader.tech/"> this page</a>
                        </p>
                        <button className="uk-margin uk-button uk-button-secondary" onClick={this.loadMeme}>GET OTHER MEME</button>
                        <div className="uk-child-width-1-2@s uk-grid-small" uk-grid="">
                            <Options up={this.handleUp} down={this.handleDown} />
                            <Img meme={this.state.img} up={this.state.up} down={this.state.down} />
                        </div>
                        <button className="uk-margin uk-button uk-button-primary" onClick={printMeme}>DOWNLOAD MEME</button>
                    </div>
                </div>
            </div>
        );
    }
}

let printMeme = () => {
    try {
        const print = new Printd();
        print.print(document.getElementById('img'), [
            `
            .img {
                max-height: 40em;
            }

            .img-container {
                position: relative;
                text-align: center;
                align-self: center;
            }

            .up {
                position: absolute;
                font-size: 2rem;
                text-align: center;
                left: 52%;
                transform: translateX(-50%);
                margin: .3em 0;
                font-family: impact,
                    sans-serif;
                text-transform: uppercase;
                color: #fff;
                letter-spacing: 2px;
                text-shadow: 2px 2px 0 #000,
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    0 2px 0 #000,
                    2px 0 0 #000,
                    0 -2px 0 #000,
                    -2px 0 0 #000,
                    2px 2px 5px #000;
            }

            .down{
                position: absolute;
                font-size: 2rem;
                bottom: .5em;
                text-align: center;
                left: 52%;
                transform: translateX(-50%);
                margin: .3em 0;
                font-family: impact,
                sans-serif;
                text-transform: uppercase;
                color: #fff;
                letter-spacing: 2px;
                text-shadow: 2px 2px 0 #000,
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                0 2px 0 #000,
                2px 0 0 #000,
                0 -2px 0 #000,
                -2px 0 0 #000,
                2px 2px 5px #000;
            }
            `
        ], );
    } catch (error) {
        console.log(error);
    }
};
