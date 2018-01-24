//import

//action

//actioncreator

//initial state

//reducer

//reducer function

//exports

//reducer export

const SAVE_TOKEN = "SAVE_TOKEN";

function saveToken(token){
    return {
        type: SAVE_TOKEN,
        token
    }
};

function usernameLogin(username, password){
    return function(dispatch){
        fetch("http://instead.co.kr/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            grant_type : "password",
            username,
            password,
            admin: true
          })
        })
        .then(response => response.json)
        .then(json => {
            console.log(json);
        });
    }
}


const initialState = {
  isLoggedIn: localStorage.getItem("access_token") ? true : false,
  token: localStorage.getItem("access_token")
};


function reducer(state=initialState, action) {
    switch (action.type) {
      case SAVE_TOKEN:
        return applySetToken(state, action);
      default:
        return state;
    }
};

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("access_token", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

const actionCreators = {
  usernameLogin,
};

export { actionCreators };

export default reducer;