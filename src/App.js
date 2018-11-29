import React, { Component } from 'react';
import { WebSiteStructure } from './WebSiteStructure';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { NavigationBar } from './common/NavigationBar';
import { MainContent } from './common/MainContent';
import './main.css';

class App extends Component {
    state = {
        webSiteStructure: null
    };
    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => this.setState(
                { webSiteStructure: Object.assign(new WebSiteStructure(), data) })
            );
    }
    render() {
        const { webSiteStructure } = this.state;
        return (
            <div className='App'>
                { webSiteStructure && (<Header webSiteStructure={ webSiteStructure } />) }
                { webSiteStructure && (<NavigationBar webSiteStructure={ webSiteStructure } />) }
                { webSiteStructure && (<MainContent webSiteStructure={ webSiteStructure }/>) }
                { webSiteStructure && (<Footer webSiteStructure={ webSiteStructure } />) }
            </div>
        );
    }
}

export default App;
