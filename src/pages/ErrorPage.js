import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="error">
        <p className="error-text">
          4
          <img src={Logo} height="115" className="App-logo" />4
        </p>
        <p className="error-subtitle">Page Not Found</p>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go back to main screen
        </Button>
      </div>
    </>
  );
}
