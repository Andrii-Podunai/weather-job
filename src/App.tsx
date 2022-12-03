import { log } from "console";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { asyncUpdateCard } from "./asyncFetch/asyncWeather";
import CardInfo from "./components/CardInfo";
import InputWeather from "./components/InputWeather";
import logo from "./logo.svg";
import { startWeather } from "./store/actionCreater";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    const arr = localStorage.getItem("myCat");
    dispatch(asyncUpdateCard(arr));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<InputWeather />}></Route>
        <Route index path="/:id" element={<CardInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
