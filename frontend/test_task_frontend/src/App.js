import Overview from "./pages/Overview/Overview";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontSize: 14,
    },
    spacing: 4,
    palette: {
      primary: { main: "#1976d2" },
    },
    overrides: {
      IconButton: {
        color: "white",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Overview />
      </Box>
    </ThemeProvider>
  );
}

export default App;
