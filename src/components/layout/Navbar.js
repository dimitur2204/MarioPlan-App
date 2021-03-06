import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = props => {
    const {auth,user} = props;
    const links = auth.uid ? <SignedInLinks user={user}></SignedInLinks> : <SignedOutLinks></SignedOutLinks>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                   <strong>Mario</strong>Plan
                </Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state,ownProps) => {
    return{
        auth: state.firebase.auth,
        user: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);