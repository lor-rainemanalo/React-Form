import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SecondaryButton({
  text,
  page = "",
  width,
  ...otherProps
}) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#d3623f",
          color: "#d3623f",
          boxShadow: "none",
          width: width,
          fontWeight: "600",
          fontSize: "18px",
          ":hover": {
            bgcolor: "none",
            color: "#7f4925",
            borderColor: "#7f4925",
            boxShadow: "none",
          },
        }}
        onClick={() => navigate(`/${page}`)}
        {...otherProps}
      >
        {text}
      </Button>
    </>
  );
}
