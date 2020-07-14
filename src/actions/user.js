import {
    SET_CURRENT_USER,
} from './types';

export const setCurrentUser = user => dispatch => {
    try {
        dispatch({ 
            type: SET_CURRENT_USER, 
            payload: user  
        });
    } catch (err) {
        console.log(err);
    }
}

