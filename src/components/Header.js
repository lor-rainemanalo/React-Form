import { Box, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>LN</div>
      <div>
        <Typography variant="subtitle1">Red Velvet School of Rhythm</Typography>
        <Typography variant="subtitle2">
          Office for Student Affairs Online Services
        </Typography>
      </div>
    </Box>
  );
}
