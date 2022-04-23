import React, { useState } from "react";
import {
  AccountCircleOutlined,
  CheckCircle,
  VpnKeyOutlined,
  Error,
} from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import RVOSTextField from "../components/RVOSTextfield";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#E3FBE4",
  p: 4,
  borderRadius: 5,
  color: "#E3FBE4",
  borderColor: "#E3FBE4",
};

export default function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const userDB = [
    { studentNo: "2018115281", passw: "123qwe" },
    { studentNo: "2018115280", passw: "asdzxc" },
  ];

  const error = {
    invalidStudentNumber: "Invalid student number",
    invalidPassword: "Invalid password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = userDB.find((user) => user.studentNo === studentNumber);

    if (userData) {
      if (userData.passw !== password) {
        setErrorMessage({ passw: error.invalidPassword });
      } else {
        setErrorMessage({});
        setOpenLoginModal(true);
      }
    } else {
      setErrorMessage({
        ...errorMessage,
        studentNo: error.invalidStudentNumber,
      });
    }
  };

  return (
    <div className="login">
      <div className="center">
        <p className="header-form">Student Login</p>
        <p className="text-subtitle" style={{ margin: "5px 0 40px 0" }}>
          Welcome back! Please enter your credentials.
        </p>
        <form onSubmit={handleSubmit}>
          {errorMessage.studentNo && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "red",
              }}
            >
              <Error fontSize="small" sx={{ mr: 1 }} />
              <p style={{ fontSize: 14 }}>{errorMessage.studentNo}</p>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              borderRadius: 2,
              px: 1,
              width: 350,
            }}
            mb={1}
          >
            <AccountCircleOutlined
              fontSize="small"
              sx={{ color: "#434343", mr: 1 }}
            />
            <RVOSTextField
              value={studentNumber}
              placeholder="Student Number"
              width={350}
              onChange={(e) => setStudentNumber(e.target.value)}
              required
            />
          </Box>
          {errorMessage.passw && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "red",
              }}
            >
              <Error fontSize="small" sx={{ mr: 1 }} />
              <p style={{ fontSize: 14 }}>{errorMessage.passw}</p>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              borderRadius: 2,
              px: 1,
              width: 350,
            }}
            mb={5}
          >
            <VpnKeyOutlined
              fontSize="small"
              sx={{ color: "#434343", mr: 1, my: 0.5 }}
            />
            <RVOSTextField
              type="password"
              value={password}
              placeholder="Password"
              width={350}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <PrimaryButton type="submit" width={365} text="Login" />
            <SecondaryButton width={365} text="Cancel" />
          </Box>
        </form>
        <p className="text-subtitle" style={{ margin: "15px 0 0" }}>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </div>
      <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <Box sx={style}>
          <CheckCircle sx={{ fontSize: 100, color: "#77DD77" }} />
          <Typography variant="h5" sx={{ color: "#77DD77", fontWeight: "600" }}>
            Success!
          </Typography>
          <Typography variant="small" sx={{ color: "#434343" }}>
            Welcome to student portal!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
