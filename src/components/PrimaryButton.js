import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

export default function PrimaryButton({
  text,
  page,
  showLoginModal,
  showRegModal,
  width,
  disabled = false,
}) {
  const navigate = useNavigate();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegModal, setOpenRegModal] = useState(false);

  const handleClick = () => {
    return showLoginModal
      ? setOpenLoginModal(true)
      : showRegModal
      ? setOpenRegModal(true)
      : navigate(`/${page}`);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#E3FBE4",
    p: 4,
    borderRadius: 5,
  };

  return (
    <>
      <Button
        disabled={disabled}
        variant="contained"
        sx={{
          bgcolor: "#000",
          color: "#EECB6E",
          boxShadow: "none",
          width: width,
          fontWeight: "600",
          ":hover": {
            bgcolor: "#EECB6E",
            color: "#000",
            borderColor: "#EECB6E",
            boxShadow: "none",
          },
        }}
        onClick={handleClick}
      >
        {text}
      </Button>
      <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <Box sx={style}>
          <CheckCircle sx={{ fontSize: 100, color: "#77DD77" }} />
          <Typography variant="h4" sx={{ color: "#77DD77", fontWeight: "600" }}>
            Success!
          </Typography>
          <Typography variant="h6" sx={{ color: "#434343" }}>
            Welcome to student portal!
          </Typography>
        </Box>
      </Modal>
      <Modal open={openRegModal} onClose={() => setOpenRegModal(false)}>
        <Box sx={style}>
          <CheckCircle sx={{ fontSize: 100, color: "#77DD77" }} />
          <Typography variant="h4" sx={{ color: "#77DD77", fontWeight: "600" }}>
            Success!
          </Typography>
          <Typography variant="h6" sx={{ color: "#434343" }}>
            Details are now being saved.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
