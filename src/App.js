import { Box, Typography } from "@mui/material";

import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>LN</div>
      <Typography variant="h4" sx={{ color: "#434343", fontWeight: "600" }}>
        Welcome
      </Typography>
      <Typography variant="subtitle1">to</Typography>
      <Typography variant="h4" sx={{ color: "#434343", fontWeight: "600" }}>
        RVSR Online Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <PrimaryButton width={180} text="Login" page="login" />
        <SecondaryButton width={180} text="Register" page="register" />
      </Box>
    </Box>
  );
}

export default App;
