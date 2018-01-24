//import

//action

//actioncreator

//initial stgate

//reducer

//reducer function

//exports

//reducer export


const initialState = {
  isLoggedIn: localStorage.getItem("access_token") ? true : false,
  token: localStorage.getItem("access_token")
};


function reducer(state=initialState, action) {
    switch(action.type) {
        default:
        return state;
    }
};

export default reducer;