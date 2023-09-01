import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
const RoomDetailed = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      margin="auto"
      direction="column"
      justifyItems={"flex-end"}
    >
      {props.temperature && (
        <Grid item>
          <Typography variant="h6" component="h4">
            Temperature is {props.temperature}°C
          </Typography>
        </Grid>
      )}
      {props.humidity && (
        <Grid item>
          <Typography variant="h6" component="h4">
            Humidity is {props.humidity}%
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default RoomDetailed;
