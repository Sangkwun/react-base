//import

//action

//actioncreator

//initial stgate

//reducer

//reducer function

//exports

//reducer export


const initialState = {
    isLoggedIn: localStorage.getItem("jwt") || false
};


function reducer(state=initialState, action) {
    switch(action.type) {
        default:
        return state;
    }
};

export default reducer;