//import
import jwtDecode from "jwt-decode";

//action

//actioncreator

//initial state

//reducer

//reducer function

//exports

//reducer export

const SAVE_TOKEN = "SAVE_TOKEN";

function saveToken(token, expiresIn, userType){
    return {
        type: SAVE_TOKEN,
        token,
        expiresIn,
        userType
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
            grant_type: "password",
            username,
            password,
            admin: true
          })
        })
        .then(response => {
             const data = response.json().then(function(data) {
              return(data);
            });
            return data
          }
        )
        .then(data => {
          const decoded = jwtDecode(data.access_token)
          dispatch(saveToken(data.access_token, decoded.expiresIn, decoded.user_type));
        })
        .catch(err => console.log(err));;
    }
}

const initialState = {
  isLoggedIn: false,
  token: localStorage.getItem("access_token"),
  expiresIn : localStorage.getItem("expires_in"),
  user_type: ""
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
  const { token,expiresIn, userType } = action;
  localStorage.setItem("access_token", token);
  localStorage.setItem("expiresIn", expiresIn);
  return {
    ...state,
    isLoggedIn: true,
    token,
    expiresIn,
    userType,
  };
}

const actionCreators = {
  usernameLogin,
};

export { actionCreators };

export default reducer;