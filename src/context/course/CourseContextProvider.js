import React, { useReducer } from "react";

export const CourseContext = React.createContext();

const initialState = {
  id: null,
  title: null,
  mentorId: null,
  learns: null,
  status: null,
  numRating: null,
  starAvg: null,
  price: null,
  register: null,
  thumbnail: null,
  detail: null,
  created: null,
  updated: null,
  chapters: null,
  ratings: null,
  qnas: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "COURSE":
      return action.value;
    case "TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "LEARNS":
      return {
        ...state,
        learns: action.value,
      };
    case "STATUS":
      return {
        ...state,
        status: action.value,
      };
    case "PRICE":
      return {
        ...state,
        price: action.value,
      };
    case "THUMBNAIL":
      return {
        ...state,
        thumbnail: action.value,
      };
    case "DETAIL":
      return {
        ...state,
        detail: action.value,
      };
    case "UPDATED":
      return {
        ...state,
        updated: action.value,
      };
    case "CHAPTERS":
      return {
        ...state,
        chapters: action.value,
      };
    case "RATINGS":
      return {
        ...state,
        ratings: action.value,
      };
    case "QNAS":
      return {
        ...state,
        qnas: action.value,
      };
    default:
      throw new Error("일치하는 명령이 존재하지 않습니다.");
  }
};

const CourseContextProvider = ({ children }) => {
  const [course, contextDispatch] = useReducer(reducer, initialState);

  return (
    <CourseContext.Provider
      value={{
        course,
        contextDispatch,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
