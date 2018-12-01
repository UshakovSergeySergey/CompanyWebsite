import React, { Component } from 'react';
import { WebSiteStructure } from './WebSiteStructure';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
//import { NavigationBar } from './common/NavigationBar';
import { MainContent } from './common/MainContent';
import './main.css';
import { SectionPathEnum } from './SectionPathEnum';

class App extends Component {
    state = {
        webSiteStructure: null,
        currentSection: SectionPathEnum.Main
    };
    sectionChanged = (section) => {
        this.setState({ currentSection: section });
    };
    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => this.setState(
                { webSiteStructure: Object.assign(new WebSiteStructure(), data) })
            );
    }
    render() {
        const { webSiteStructure, currentSection } = this.state;
        return (
            <div className='container-fluid' style={ { padding: '0px' } }>
                <div className='App'>
                    { webSiteStructure && (<Header webSiteStructure={ webSiteStructure } currentSection={ currentSection } sectionChanged={ this.sectionChanged } />) }
                    { /* webSiteStructure && (<NavigationBar webSiteStructure={ webSiteStructure } />) */ }
                    { webSiteStructure && (<MainContent webSiteStructure={ webSiteStructure }/>) }
                    { webSiteStructure && (<Footer webSiteStructure={ webSiteStructure } currentSection={ currentSection } sectionChanged={ this.sectionChanged } />) }
                </div>
            </div>
        );
    }
}

export default App;
