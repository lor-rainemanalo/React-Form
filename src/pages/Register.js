import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import RegisterField from "../components/RegisterField";
import SecondaryButton from "../components/SecondaryButton";

export default function Register() {
  const [studentNumber, setStudentNumber] = useState("");
  const [yearLevel, setYearLevel] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState(0);
  const [program, setProgram] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const allFieldsHaveValues =
    studentNumber &&
    yearLevel &&
    firstName &&
    middleName &&
    lastName &&
    college &&
    program &&
    password &&
    confirmPassword;

  return (
    <>
      <Header />
      <Box
        mt={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#434343", fontWeight: "600" }}>
          Account Registration
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#434343" }}>
          Fill up the form to create your student account.
        </Typography>
        <Box>
          <RegisterField
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            label="Student Number"
            width={290}
          />

          <FormControl
            sx={{ width: 144, marginTop: 2, marginLeft: 2 }}
            size="small"
          >
            <InputLabel
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Year Level
            </InputLabel>
            <Select
              label="Year Level"
              value={yearLevel}
              onChange={(e) => setYearLevel(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <RegisterField
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          width={450}
        />

        <Box>
          <RegisterField
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            label="Middle Name"
            width={217}
          />
          <RegisterField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            width={217}
            marginLeft={2}
          />
        </Box>

        <FormControl sx={{ width: 450, marginTop: 2 }} size="small">
          <InputLabel
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            College
          </InputLabel>
          <Select
            label="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          >
            <MenuItem value={1}>
              College of Information and Computing Sciences
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 450, marginTop: 2 }} size="small">
          <InputLabel
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Program
          </InputLabel>
          <Select
            label="Program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          >
            <MenuItem value={1}>Computer Science</MenuItem>
            <MenuItem value={2}>Information Technology</MenuItem>
            <MenuItem value={3}>Information Systems</MenuItem>
          </Select>
        </FormControl>

        <RegisterField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="Enter Password"
          width={450}
        />
        <RegisterField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          label="Confirm Password"
          width={450}
        />

        <Box
          mt={2}
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {allFieldsHaveValues ? (
            <PrimaryButton width={217} text="Submit" showRegModal={true} />
          ) : (
            <PrimaryButton disabled={true} width={217} text="Submit" />
          )}
          <SecondaryButton width={217} text="Cancel" />
        </Box>
        <Box sx={{ display: "flex", color: "#434343" }}>
          <Typography variant="subtitle1">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
