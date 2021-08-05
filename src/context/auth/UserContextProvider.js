import React, { useReducer } from "react";

export const UserContext = React.createContext();

const initialState = JSON.parse(window.sessionStorage.getItem("user")) || {
  id: null,
  email: null,
  profile: null,
  nickName: null,
  introduce: null,
  favoriteCourses: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "PROFILE":
      return {
        ...state,
        profile: action.value,
      };
    case "NICKNAME":
      return {
        ...state,
        nickName: action.value,
      };
    case "INTRODUCE":
      return {
        ...state,
        introduce: action.value,
      };

    case "LOGOUT":
      return initialState;
    default:
      throw new Error("일치하는 명령이 존재하지 않습니다.");
  }
};

const UserContextProvider = ({ children }) => {
  const [user, contextDispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        user,
        contextDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
