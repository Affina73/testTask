import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";

export default function SearchAppBar({ onInputChangeCallback }) {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");

  const onInputUpdate = (evt) => {
    const value = evt.target.value;
    setSearchText(value);
    onInputChangeCallback(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: 4,
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  flexGrow: 1,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: 1,
                }}
              >
                <Grid container>
                  <Grid item xs={0.5} />
                  <Grid
                    item
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <SearchIcon />{" "}
                  </Grid>
                  <Grid item xs={5}>
                    <InputBase
                      placeholder="Search..."
                      value={searchText}
                      onChange={(evt) => onInputUpdate(evt)}
                      sx={{ flexGrow: 1 }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
