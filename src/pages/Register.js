import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import RegisterField from "../components/RegisterField";
import SecondaryButton from "../components/SecondaryButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "newStudentNumber":
      return { ...state, studentNumber: action.payload };
    case "newYearLevel":
      return { ...state, yearLevel: action.payload };
    case "newFirstName":
      return { ...state, firstName: action.payload };
    case "newMiddleName":
      return { ...state, middleName: action.payload };
    case "newLastName":
      return { ...state, lastName: action.payload };
    case "newCollege":
      return { ...state, college: action.payload };
    case "newProgram":
      return { ...state, program: action.payload };
    case "newPassword":
      return { ...state, password: action.payload };
    case "newConfirmPassword":
      return { ...state, confirmPassword: action.payload };
    default:
      throw new Error();
  }
};

const initialValues = {
  studentNumber: "",
  yearLevel: null,
  firstName: "",
  middleName: "",
  lastName: "",
  college: null,
  program: null,
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const allFieldsHaveValues =
    state.studentNumber &&
    state.yearLevel &&
    state.firstName &&
    state.middleName &&
    state.lastName &&
    state.college &&
    state.program &&
    state.password &&
    state.confirmPassword;

  return (
    <>
      <div className="register">
        <div className="center"></div>
        <Box
          mt={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="header-form">Account Registration</p>
          <p className="text-subtitle" style={{ margin: "5px 0 0" }}>
            Fill up the form to create your student account.
          </p>

          <Box>
            <RegisterField
              value={state.studentNumber}
              onChange={(e) =>
                dispatch({ type: "newStudentNumber", payload: e.target.value })
              }
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
                value={state.yearLevel}
                onChange={(e) =>
                  dispatch({ type: "newYearLevel", payload: e.target.value })
                }
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
            value={state.firstName}
            onChange={(e) =>
              dispatch({ type: "newFirstName", payload: e.target.value })
            }
            label="First Name"
            width={450}
          />

          <Box>
            <RegisterField
              value={state.middleName}
              onChange={(e) =>
                dispatch({ type: "newMiddleName", payload: e.target.value })
              }
              label="Middle Name"
              width={217}
            />
            <RegisterField
              value={state.lastName}
              onChange={(e) =>
                dispatch({ type: "newLastName", payload: e.target.value })
              }
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
              value={state.college}
              onChange={(e) =>
                dispatch({ type: "newCollege", payload: e.target.value })
              }
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
              value={state.program}
              onChange={(e) =>
                dispatch({ type: "newProgram", payload: e.target.value })
              }
            >
              <MenuItem value={1}>Computer Science</MenuItem>
              <MenuItem value={2}>Information Technology</MenuItem>
              <MenuItem value={3}>Information Systems</MenuItem>
            </Select>
          </FormControl>

          <RegisterField
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "newPassword", payload: e.target.value })
            }
            type="password"
            label="Enter Password"
            width={450}
          />
          <RegisterField
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch({ type: "newConfirmPassword", payload: e.target.value })
            }
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
          <p className="text-subtitle" style={{ margin: "5px 0 0" }}>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </Box>
      </div>
    </>
  );
}
