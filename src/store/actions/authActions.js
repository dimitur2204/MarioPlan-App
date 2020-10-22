export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.login(
            credentials).then(() => {
                dispatch({type:'LOGIN_SUCCESS'});
            }).catch(err => {
                dispatch({type:'LOGIN_ERROR',err})
            });
    }
}

export const signUp = (credentials) => {
    return (dispatch, getState, {getFirestore,getFirebase}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log(firebase);
        firebase.createUser({email:credentials.email,password:credentials.password})
        .then(res => {
            const {user} = res;  
            return firestore.collection('users').doc(user.uid).set({
                firstName:credentials.firstName,
                lastName:credentials.lastName,
                initials:credentials.firstName[0] + credentials.lastName[0]
            })
        }).then(() => {
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((err) => {
            dispatch({type:"SIGNUP_ERROR",err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}