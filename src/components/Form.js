import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions/index';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city : ''
        }
        this.getWeather = this.getWeather.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
    }

    getWeather = (event) => {
        event.preventDefault();
        let city = this.state.city;
        this.props.onGetData(city);
    }

    onChangeCity = (event) => {
        this.setState({
            city: this.formatCityName(event.target.value)
        });
    }
    
    formatCityName = alias => {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/ /g,"");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"");
        str = str.replace(/ + /g," ");
        str = str.trim(); 
        return str;
    }
    render() {
        return (
            <form onSubmit={this.getWeather}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-9 city-name">
                            <input className="form-control" placeholder="Nhập tên thành phố" onChange={this.onChangeCity} />
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-block btn-primary">Xem</button>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetData : (city) => {
            dispatch(action.getWeather(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);