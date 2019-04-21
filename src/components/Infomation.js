import React, { Component } from 'react';
import { connect } from 'react-redux';

class Infomation extends Component {    
    render() {        
        let {temp, humidity, temp_max, temp_min, city} = this.props.info;
        return (
            <div className="card">
                <div className="card-body">
                    <h2>{ city }</h2>
                    <hr />
                    <ul className="list-unstyled place-detail">
                        <li>
                            <span><i className="fas fa-thermometer-half"></i> Nhiệt độ: </span>
                            <strong>{ temp }<sup>o</sup>C</strong>
                        </li>
                        <li>
                            <span><i className="fas fa-tint"></i> Độ ẩm: </span>
                            <strong>{ humidity }%</strong>
                        </li>
                        <li className="text text-info">
                            <span><i className="fas fa-temperature-low"></i> Nhiệt độ thấp: </span>
                            <strong>{ temp_min }<sup>o</sup>C</strong>
                        </li>
                        <li className="text text-danger">
                            <span><i className="fas fa-temperature-high"></i> Nhiệt độ cao: </span>
                            <strong>{ temp_max }<sup>o</sup>C</strong>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {    
    return {
        info: state.weather,
    }
}

export default connect(mapStateToProps, null)(Infomation);