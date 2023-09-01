import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import CardManager from "../../components/CardManager/CardManager";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import * as colors from "@mui/material/colors";
import { useTheme } from "@mui/material";

export default function Overview() {
  const theme = useTheme();
  const [roomdetails, setRoomDetails] = useState({ rooms: {} });
  const [filterRoomsText, setFilterRoomsText] = useState("");

  useEffect(() => {
    function fetchRoomMetadata() {
      const userId = 1; // hardcoded for the prototype
      const getRoomUrl = `http://localhost:8080/user/${userId}/data`;
      const requestOptions = {
        method: "GET",
      };
      fetch(getRoomUrl, requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let newRoomMetadata = {};
          for (let i = 0; i < data.length; i++) {
            const room = data[i];
            newRoomMetadata[room["id"]] = {
              color: generateColor(),
              roomProps: room,
            };
          }
          setRoomDetails({ rooms: newRoomMetadata });
        });
    }
    fetchRoomMetadata();
  }, []);

  const WIDTH = 400;
  const NUM_ROOM_IN_ROW = 2;
  return (
    <Box
      sx={{
        width: WIDTH,
        borderRadius: 4,
        border: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchAppBar
        text={filterRoomsText}
        onInputChangeCallback={setFilterRoomsText}
      />
      <CardManager
        cardMetadata={roomdetails}
        filterRoomsText={filterRoomsText}
        size={WIDTH / NUM_ROOM_IN_ROW - 1.5 * theme.spacing().slice(0, -2)}
        renderNewRoomButton={true}
      />
    </Box>
  );

  function generateColor() {
    let size = Object.keys(colors).length;
    let idx = Math.floor(Math.random() * size);
    let color = colors[Object.keys(colors)[idx]];
    return { dark: color[500], light: color[200] };
  }

  function mockCardMetadata() {
    return {
      rooms: {
        1: {
          color: generateColor(),
          roomProps: { name: "Living room", temperature: 30, humidity: 12 },
        },
        2: {
          color: generateColor(),
          roomProps: { name: "Bathroom", temperature: -5, humidity: 56 },
        },
        3: {
          color: generateColor(),
          roomProps: { name: "Bedroom 1", temperature: 28, humidity: 26 },
        },
      },
    };
  }
}
