import { AccountCircleOutlined, VpnKeyOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import RVOSTextField from "../components/RVOSTextfield";

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
            sx={{ color: "#434343", mr: 1 }}
          />
          <RVOSTextField
            value={studentNumber}
            placeholder="Student Number"
            width={350}
            onChange={(e) => setStudentNumber(e.target.value)}
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
          <RVOSTextField
            type="password"
            value={password}
            placeholder="Password"
            width={350}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        {/*CHECKING*/}

        {studentNumber && password ? (
          <PrimaryButton width={365} text="Login" showLoginModal={true} />
        ) : (
          <PrimaryButton disabled={true} width={365} text="Login" />
        )}
        <p className="text-subtitle" style={{ margin: "15px 0 0" }}>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
