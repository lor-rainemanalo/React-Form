import { Box } from "@mui/material";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

function App() {
  return (
    <div className="home">
      <p className="header-home">Red Velvet Online Services</p>
      <p className="text-subtitle" style={{ width: "370px" }}>
        Welcome to our online services page! Please select the transaction that
        you wish to perform.
      </p>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <PrimaryButton width={180} text="Login" page="login" />
        <SecondaryButton width={180} text="Register" page="register" />
      </Box>
    </div>
  );
}

export default App;


