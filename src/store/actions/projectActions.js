export const createProject = (project) => {
    return (dispatch, getState) => {
        //make call to db
        dispatch({type:'CREATE_PROJECT', project});
    }
};