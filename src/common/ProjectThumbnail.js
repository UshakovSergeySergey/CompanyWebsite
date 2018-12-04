import React from 'react';
import PropTypes from 'prop-types';
import { Project } from '../InternalDataTypes/Project';
import { Link } from 'react-router-dom';
import { SectionPathEnum } from '../SectionPathEnum';
import {ActionTypes, Analytics} from '../Analytics';

class ProjectThumbnail extends React.Component {
    render() {
        const project = this.props.project;
        const projectPath = process.env.PUBLIC_URL + SectionPathEnum.Portfolio + project.Path;
        return (
            <div className='container-fluid project-thumbnail'>
                <Link
                    to={ projectPath }
                    onClick={ () => {
                        Analytics.pageChanged(projectPath);
                        Analytics.fireEvent(ActionTypes.LinkClicked, 'Portfolio project \'' + project.Path + '\'');
                    } }
                >
                        <img src={ process.env.PUBLIC_URL + project.ThumbnailImage } alt={ project.Name } />
                        <p>{ project.Name }</p>
                </Link>
            </div>
        );
    }
}

ProjectThumbnail.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired
};

export { ProjectThumbnail };
