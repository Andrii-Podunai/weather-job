import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addId, deleteWeather } from "../store/actionCreater";
import Card from "./Card";

export default function Cards() {
  const dispatch: any = useDispatch();
  const selector = useSelector((state: any) => state.weatherData.weatherData);
  const selectorId: any = useSelector(
    (state: any) => state.weatherData.idWeather
  );

  const arr: any = [5815135, 5128581, 698740, 703448, 264374];

  useEffect(() => {
    let cat = localStorage.getItem("myCat");

    if (cat !== "" && cat) {
      let updateCat = localStorage.getItem("myCat");

      const array = JSON.parse("[" + updateCat + "]");
      dispatch(addId(array));
    }
    if ([cat].length < 1 || !localStorage.myCat || localStorage.myCat === "") {
      localStorage.setItem("myCat", arr);

      dispatch(addId(arr));
    }
  }, []);

  useEffect(() => {
    if (localStorage.myCat !== "" && selectorId.length !== 0) {
      localStorage.setItem("myCat", selectorId);
    }
  }, [selector]);

  const deleteWeatherId = (deleteId: number | string) => {
    dispatch(deleteWeather(deleteId));

    const filteredId = selectorId.filter(
      (cardId: number) => cardId !== deleteId
    );
    localStorage.setItem("myCat", filteredId);
  };

  return (
    <div>
      {selector &&
        selector.map((data: any) => (
          <Card
            deleteWeather={deleteWeatherId}
            id={data.id}
            temperature={data.main.temp.toFixed(1)}
            key={data.id}
            name={data.name}
            weather={data.weather}
          />
        ))}
    </div>
  );
}
