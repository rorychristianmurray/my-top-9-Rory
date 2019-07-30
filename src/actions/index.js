// Dependencies
import axios from "axios";

// Objects
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./types";

// Register a user
//Server will create user and user id

//Login

// Send username and password
// If valid, server will return a token
// Set token to local storage

// Fire off a fetch to the API, include token in header
// If token is valid, API will return data, if invalid error

const token = JSON.parse(localStorage.getItem("token"));

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://api-here.com/`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};
