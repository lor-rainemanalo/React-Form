import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">Error! Page not found.</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go back to main screen
      </Button>
    </>
  );
}
