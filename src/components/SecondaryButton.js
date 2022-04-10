import React from "react";
import { Button } from "@mui/material";

export default function SecondaryButton({ text, page, showModal, width }) {
  return (
    <Button
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
    >
      {text}
    </Button>
  );
}
