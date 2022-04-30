import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PrimaryButton({
  text,
  page = "",
  width,
  ...otherProps
}) {
  const navigate = useNavigate();

  return (
    <>
      {page === "" ? (
        <Button
          variant="contained"
          sx={{
            bgcolor: "#d3623f",
            color: "#fff",
            boxShadow: "none",
            width: width,
            fontWeight: "600",
            fontSize: "18px",
            ":hover": {
              bgcolor: "#7f4925",
              borderColor: "#EECB6E",
              boxShadow: "none",
            },
          }}
          {...otherProps}
        >
          {text}
        </Button>
      ) : (
        <Button
          sx={{
            bgcolor: "#d3623f",
            color: "#fff",
            boxShadow: "none",
            width: width,
            fontWeight: "600",
            fontSize: "18px",
            ":hover": {
              bgcolor: "#7f4925",
              borderColor: "#EECB6E",
              boxShadow: "none",
            },
          }}
          onClick={() => navigate(`/${page}`)}
          {...otherProps}
        >
          {text}
        </Button>
      )}
    </>
  );
}
