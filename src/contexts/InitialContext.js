
import React, { createContext, useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export const InitialContext = createContext();

export const FitnessContext = (props) => {
  // setting up state and functions for InitialContext
  const [session, setSession] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        setSession(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setSession]);
  return (
    <>
    <InitialContext.Provider value={{session, setSession, clients}}>
      {props.children}
    </InitialContext.Provider>
    </>
  )
}