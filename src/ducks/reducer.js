// import axios from 'axios';

const initialstate = {
    user:{
        username: '',
        id: 0,
        profilePic: ''
    }
}

const SET_USER_INFO = 'SET_USER_INFO'

export const setUserInfo = (id, username, profilePic) => {
    return {
        type: SET_USER_INFO,
        payload: { id, username, profilePic}
    }
}

export function reducer(state = initialstate, action){
    switch(action.type){
        case SET_USER_INFO:
            return {...state, user: action.payload}
        default: 
        return state
    }
}