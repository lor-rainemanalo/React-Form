import { AccountCircleOutlined, VpnKeyOutlined } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

export default function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <Box
        mt={10}
        sx={{
          width: 300,
        }}
      >
        <Typography variant="h4" sx={{ color: "#434343", fontWeight: "600" }}>
          Student Login
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#434343" }}>
          Welcome back! Please enter your credentials.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            bgcolor: "#fff",
            borderRadius: 2,
          }}
          mb={2}
        >
          <AccountCircleOutlined
            fontSize="small"
            sx={{ color: "#434343", mr: 1, my: 0.5 }}
          />
          <TextField
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            label="Student Number"
            variant="standard"
            size="small"
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            bgcolor: "#fff",
            width: 300,
            borderRadius: 2,
          }}
          mb={10}
        >
          <VpnKeyOutlined
            fontSize="small"
            sx={{ color: "#434343", mr: 1, my: 0.5 }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="standard"
            size="small"
            fullWidth
          />
        </Box>
        {studentNumber && password ? (
          <PrimaryButton width={300} text="Login" showLoginModal={true} />
        ) : (
          <PrimaryButton disabled={true} width={300} text="Login" />
        )}
        <Box sx={{ display: "flex", color: "#434343" }}>
          <Typography variant="subtitle1">
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
