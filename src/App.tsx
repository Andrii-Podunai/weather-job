import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { asyncStartCard } from "./asyncFetch/asyncWeather";
import CardInfo from "./components/CardInfo";
import InputWeather from "./components/InputWeather";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    const arr = localStorage.getItem("myCat");
    dispatch(asyncStartCard(arr));
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
