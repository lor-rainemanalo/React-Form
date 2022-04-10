import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SecondaryButton({
  text,
  page = "",
  width,
  disabled = false,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        disabled={disabled}
        variant="outlined"
        sx={{
          borderColor: "#000",
          color: "#000",
          boxShadow: "none",
          width: width,
          fontWeight: "600",
          ":hover": {
            bgcolor: "#000",
            color: "#fff",
            borderColor: "#000",
            boxShadow: "none",
          },
        }}
        onClick={() => navigate(`/${page}`)}
      >
        {text}
      </Button>
    </>
  );
}
