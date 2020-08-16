import React from 'react';
import Data from './editor/data';
import Meme from './meme_generator/meme';

export default class App extends React.Component {
    render() {
        return this.props.actual === 'editor' ? <Data /> : <Meme />;
    }
}