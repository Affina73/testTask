import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
const Room = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      margin="auto"
      direction="column"
      justifyItems={"flex-end"}
    >
      <Grid item>
        <Typography variant="h5" component="h5">
          {props.name}
        </Typography>
      </Grid>
      {props.temperature && (
        <Grid item>
          <Typography variant="h6" component="h4">
            {props.temperature}°C
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Room;
