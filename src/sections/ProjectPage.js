import React from 'react';
import PropTypes from 'prop-types';
import { WebSiteStructure } from '../WebSiteStructure';
import { SectionPathEnum } from '../SectionPathEnum';
import {Link, Redirect} from 'react-router-dom';
import { Carousel } from '../common/Carousel';
import { ContentType } from '../InternalDataTypes/Project';

class ProjectPage extends React.Component {
    render() {
        const projectUrl = window.location.href;
        const portfolioUrl = process.env.PUBLIC_URL + SectionPathEnum.Portfolio;
        const path = projectUrl.slice(projectUrl.indexOf(portfolioUrl) + portfolioUrl.length);
        const project = this.props.webSiteStructure.getProjectByPath(path);

        if(!project)
            return (<Redirect to={ SectionPathEnum.NotFound } />);

        return (
            <div>
                <h1>{ project.Name }</h1>
                <p>{ project.Description }</p>
                <Carousel numberOfRows={ 1 } numberOfColumns={ 1 } items={ project.Content } renderItem={ this.renderContent }/>
            </div>
        );
    }
    renderContent = (content) => {
        switch(content.ContentType) {
            case ContentType.Video:
                return (
                    <div className='content-fluid project-thumbnail'>
                        <iframe id='player' type='text/html' width='640' height='360'
                                src={ content.Link }
                                frameBorder='0'></iframe>
                        <p>{ content.Name }</p>
                    </div>
                );
            case ContentType.Photo:
                return (
                    <div className='content-fluid project-thumbnail'>
                        <img style={ { width: '100%', height: '100%'} } src={ process.env.PUBLIC_URL + content.Link } alt={ content.Name } />
                        <p>{ content.Name }</p>
                    </div>
                );
            default:
                console.error('unknown content type');

        }
    };
}

ProjectPage.propTypes = {
    webSiteStructure: PropTypes.instanceOf(WebSiteStructure).isRequired
};

export { ProjectPage };
