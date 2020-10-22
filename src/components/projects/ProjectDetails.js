import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import {compose} from 'redux';
import moment from 'moment';

const ProjectDetails = (props) => {
    const {project,auth} = props;
    
    if (project) {
    if(!auth.uid) return <Redirect to='signIn'></Redirect>
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div> )
    }
    return (
        <div className="container center">
            <p>Loading project...</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    return{
        project:projects ? projects[id] : null,
        auth:state.firebase.auth
    }
}
 
export default compose(connect(mapStateToProps),firestoreConnect([{collection:'projects'}]))(ProjectDetails);