import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;