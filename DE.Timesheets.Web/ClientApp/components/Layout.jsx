import React from 'react';
import PropTypes from "prop-types";
import NavMenu from './NavMenu';
import AppProvider from "./AppProvider";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppProvider>
                <div className='container'>
                    <NavMenu />
                    <div className='row paddingLayout'>
                        <div className='col-sm-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </AppProvider>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout;