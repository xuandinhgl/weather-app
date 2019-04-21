import React, { Component } from 'react';
import { connect } from 'react-redux';

class Error extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                {this.props.message}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message : state.error.message
    }
}

export default connect(mapStateToProps, null)(Error);