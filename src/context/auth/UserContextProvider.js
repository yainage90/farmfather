import React, { useReducer } from "react";

export const UserContext = React.createContext();

const initialState = {
  id: null,
  email: null,
  image: null,
  nickName: null,
  introduce: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IMAGE":
      return {
        ...state,
        image: action.value,
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
    default:
      throw new Error("일치하는 명령이 존재하지 않습니다.");
  }
};

const UserContextProvider = ({ children }) => {
  const [user, contextDispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        user: user,
        contextDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
