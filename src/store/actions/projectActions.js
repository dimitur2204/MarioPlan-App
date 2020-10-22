export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const firebase = getState().firebase;
        const user = firebase.profile;
        const authorId = firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: user.firstName,
            authorLastName:user.lastName,
            authorId:authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};