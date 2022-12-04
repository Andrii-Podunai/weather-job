import { Typography } from "@mui/material";
import { log } from "console";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncWeather } from "../asyncFetch/asyncWeather";
import Cards from "./Cards";

export default function InputWeather() {
  const [city, setCity] = useState("");

  const dispatch: any = useDispatch();

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await dispatch(asyncWeather(city));
  };

  return (
    <div>
      <Typography component="span">
        <form
          className="form__city"
          style={{ marginTop: "80px" }}
          onSubmit={handleSubmit}
        >
          <label style={{ fontSize: "20px" }}>
            <span style={{ fontSize: "20px" }}>Write city </span>
            <input
              style={{ padding: "8px", borderRadius: "16px" }}
              type="text"
              onChange={handleCity}
            />
          </label>
          <input
            style={{
              marginLeft: "20px",
              padding: "9px 12px",
              backgroundColor: "#d1d1c7",
              border: "none",
              borderRadius: "16px",
            }}
            type="submit"
            value="Submit"
          />
        </form>
      </Typography>

      <Cards />
    </div>
  );
}
