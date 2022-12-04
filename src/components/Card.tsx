import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface ICard {
  name: string;
  weather: ArrayLike<any>;
  temperature: string;
  id: string;
  deleteWeather: (id: number | string) => void;
}
export default function Card({
  deleteWeather,
  temperature,
  name,
  weather,
  id,
}: ICard) {
  return (
    <div>
      {
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
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={id}
            to={`/${id}`}
          >
            <h1 style={{ cursor: "pointer" }}>{name}</h1>
          </Link>
          <p>Temperature {temperature}</p>
          <p>{weather[0].main}</p>
          <button
            style={{ right: "15px", bottom: "15px", position: "absolute" }}
            onClick={() => {
              deleteWeather(id);
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </button>
        </Box>
      }
    </div>
  );
}
