import { AccountCircleOutlined, VpnKeyOutlined } from "@mui/icons-material";
import { Box, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

export default function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="center">
        <p className="header-form">Student Login</p>
        <p className="text-subtitle" style={{ margin: "5px 0 0" }}>
          Welcome back! Please enter your credentials.
        </p>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#fff",
            borderRadius: 2,
            mt: 5,
            px: 1,
            width: 350,
          }}
          mb={1}
        >
          <AccountCircleOutlined
            fontSize="small"
            sx={{ color: "#434343", mr: 1, my: 0.5 }}
          />
          <TextField
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            label="Student Number"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
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
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {/*CHECKING*/}

        {studentNumber && password ? (
          <PrimaryButton width={350} text="Login" showLoginModal={true} />
        ) : (
          <PrimaryButton disabled={true} width={350} text="Login" />
        )}
        <p className="text-subtitle" style={{ margin: "5px 0 0" }}>
          <button className="btn primary">LOGIN</button>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
