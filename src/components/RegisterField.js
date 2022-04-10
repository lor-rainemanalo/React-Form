import React from "react";
import { TextField } from "@mui/material";

export default function RegisterField({
  label,
  width,
  type = "text",
  marginLeft = 0,
  ...otherProps
}) {
  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      size="small"
      sx={{ width: width, marginTop: 2, marginLeft: marginLeft }}
      {...otherProps}
    />
  );
}
