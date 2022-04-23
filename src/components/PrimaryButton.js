import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PrimaryButton({
  type = "button",
  text,
  page = "",
  width,
  disabled = false,
  ...otherProps
}) {
  const navigate = useNavigate();

  return (
    <>
      {page === "" ? (
        <Button
          disabled={disabled}
          type={type}
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
          disabled={disabled}
          type={type}
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
