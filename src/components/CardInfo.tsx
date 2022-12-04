import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { asyncUpdateCard } from "../asyncFetch/asyncWeather";
import { useDispatch } from "react-redux";

export default function CardInfo() {
  const [data, setData] = useState<any>({});
  const { id } = useParams();

  const dispatch: any = useDispatch();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${id}&units;=metric&appid=a01be2ab8925ebff559e363c9193587e&units=metric`
    )
      .then((response) => response.json())
      .then((response) => setData(response.list[0]));
  }, [id]);

  const updateWeather = () => {
    dispatch(asyncUpdateCard(id));

    // fetch(
    //   `http://api.openweathermap.org/data/2.5/group?id=${id}&units;=metric&appid=a01be2ab8925ebff559e363c9193587e&units=metric`
    // )
    //   .then((response) => response.json())
    //   .then((response) => setData(response.list[0]));
  };

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        key={id}
        to={`/`}
      >
        <Button
          style={{ margin: "50px auto", display: "flex" }}
          variant="outlined"
        >
          Weather list
        </Button>
      </Link>

      {data.name && (
        <Box
          sx={{
            borderRadius: "16px",
            position: "relative",
            my: "60px",
            mx: "auto",
            width: 300,
            padding: "10px 20px",
            bgcolor: "#d1d1c7",
            borderColor: "grey.500",
          }}
        >
          <h1>{data.name}</h1>
          <img
            style={{ position: "absolute", right: "64px", top: "68px" }}
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          <p>Temperature: {data.main.temp.toFixed(1)}</p>
          <div style={{ display: "flex", gap: "50px" }}>
            <p style={{ marginTop: "0px" }}>
              {" "}
              max:{data.main.temp_max.toFixed(1)}
            </p>
            <p style={{ marginTop: "0px" }}>
              {" "}
              min:{data.main.temp_min.toFixed(1)}
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <p>{data.weather[0].description}</p>
            <p>Wind speed: {data.wind.speed}</p>
          </div>
          <p style={{ margin: "10px 0px 3px" }}>Country {data.sys.country}</p>
          <button
            style={{ right: "15px", top: "15px", position: "absolute" }}
            onClick={updateWeather}
          >
            <RestartAltOutlinedIcon />
          </button>
        </Box>
      )}
    </div>
  );
}
