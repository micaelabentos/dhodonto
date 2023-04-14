import { useEffect, useReducer } from "react";
import { createContext } from "react";
import axios from "axios";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


export const ContextGlobal = createContext(undefined);


const reducerFunction = (state, action)=>{
  switch (action.type){
    case "theme":
      return {...state, modoDark: !state.modoDark};
    case "data":
      return {...state, data: action.payload};
      default:
        return state;
  }
}

export const ContextProvider = ({ children }) => {
  
  const initialState = {modoDark: false, data: []}
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  
  const theme = createTheme({
    palette:{
      mode: (state.modoDark ? 'dark': 'light')
    } 
  });

  const getData = () =>{
    axios.get(`https:jsonplaceholder.typicode.com/users`)
    .then(
      res=> {
        dispatch({type: "data", payload: res.data});
      }
    )
  }

  useEffect(()  => getData(), [])

  const store = {
    state,
    dispatch
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
    </ThemeProvider>
  );
};