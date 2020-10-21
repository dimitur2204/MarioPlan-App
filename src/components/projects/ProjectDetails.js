import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at ullam veritatis atque iste perferendis quia dolorem unde laborum nisi!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by the Net Ninja</div>
                <div>2nd September</div>
            </div>
        </div>
    </div> );
}
 
export default ProjectDetails;