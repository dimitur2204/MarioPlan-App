const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_SUCCESS':
        console.log('signup success');
        return{
            ...state,
            authError:null
        }
        case 'SIGNUP_ERROR':
        console.log('signup failed');
        console.log(action.err);
        return{
            ...state,
            authError: action.err.message
        }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return{
                ...state,
                authError:null
            }
    
        default:
            return state;
    }
}

export default authReducer;