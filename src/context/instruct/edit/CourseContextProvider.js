import React, { useReducer } from "react";

export const CourseContext = React.createContext();

const initState = {
  id: "",
  title: "",
  subTitle: "",
  status: "pending",
  numRating: 0,
  starAvg: 0.0,
  price: 0,
  register: 0,
  thumbnail: "",
  learns: [],
  detail: "",
  mentorInfo: "",
  chapters: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COURSEINFO": {
      return {
        ...state,
        ...action.value,
      };
    }
    case "SET_COURSEDETAIL": {
      return {
        ...state,
        ...action.value,
      };
    }
    case "SET_COURSECHAPTERS": {
      return {
        ...state,
        ...action.value,
      };
    }
  }
};

const CourseContextProvider = ({ children }) => {
  const [state, contextDispatch] = useReducer(reducer, initState);

  return (
    <CourseContext.Provider
      value={{
        course: state,
        contextDispatch,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
