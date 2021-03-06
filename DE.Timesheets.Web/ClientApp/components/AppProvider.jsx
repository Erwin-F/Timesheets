﻿import React from "react";
//import AppContext from "./AppContext";
import PropTypes from "prop-types";

export const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ajaxCounter: 0,
            incrementAjaxCounter: () => {
                this.setState({
                    ajaxCounter: this.state.ajaxCounter + 1
                });
            },
            decrementAjaxCounter: () => {
                this.setState({
                    ajaxCounter: this.state.ajaxCounter - 1
                });
            }
        };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

AppProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AppProvider;