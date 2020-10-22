export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log(firebase);
        console.log(credentials);
        firebase.login(
            credentials).then(() => {
                dispatch({type:'LOGIN_SUCCESS'});
            }).catch(err => {
                dispatch({type:'LOGIN_ERROR',err})
            });
    }
}