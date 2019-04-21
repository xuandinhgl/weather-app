import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const getWeatherSuccess = (data) => {
    return {
        type: actionTypes.GET_WEATHER,
        data
    }
};

export const loading = () => {
    return {
        type: actionTypes.LOADING
    }
}
export const displayInfo = () => {
    return {
        type: actionTypes.DISPLAY_INFO
    }
}

export const toggleLoading = () => {
    return {
        type: actionTypes.TOGGLE_LOADING
    }
}

export const displayError = (message) => {
    return {
        type: actionTypes.SHOW_ERROR,
        message
    }
}

export const dismissError = () => {
    return {
        type: actionTypes.DISMISS_ERROR
    }
}

export const getWeather = (city) => {
    return (dispatch) => {
        dispatch(toggleLoading());
        axios.get(
            'https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: '2e36a4618eae156b674c9a27fa0a64ac',
                    units: 'metric'
                }
            }
        )
        .then(res => {
            let data = res.data.main;
            data.city = res.data.name;
            dispatch(getWeatherSuccess(data));
            dispatch(dismissError());
            setTimeout(function () {
                dispatch(toggleLoading());
            }, 500);
        })
        .catch(error => {
            dispatch(displayError('Sai tên tỉnh/thành phố'));
            setTimeout(function () {
                dispatch(toggleLoading());
            }, 500);
        });
    }
}
