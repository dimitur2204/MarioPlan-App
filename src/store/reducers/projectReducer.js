const initState = {
    projects:[
        {id:'1', title:'first project', content:'Lorem ipsum dolor sit amet natam ne go znam some content here actually'},
        {id:'2', title:'help me find Peach', content:'Help Mario find Peach he is so desperate and needs help'},
        {id:'3', title:'egg hunt something', content:'Davaite da hodim za qica po burzo super mario nai qkata igra bratle'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            break;
    
        default:
            break;
    }
    return state;
}

export default projectReducer;