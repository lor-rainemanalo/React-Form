import React, { useReducer, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { CheckCircle, Error } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import RVOSTextField from "../components/RVOSTextfield";
import RVOSSelect from "../components/RVOSSelect";

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
  yearLevel: "",
  firstName: "",
  middleName: "",
  lastName: "",
  college: "",
  program: "",
  password: "",
  confirmPassword: "",
};

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

export default function Register() {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [openRegModal, setOpenRegModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const studentRe = /^\d{10}$/;
  const passRe =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*.,-?])[a-zA-Z0-9!@#$%^&*.,-?]{8,}$/;

  const allFieldsAreValid =
    studentRe.test(state.studentNumber) &&
    passRe.test(state.password) &&
    state.confirmPassword === state.password;

  const isPasswordMatch = state.confirmPassword !== state.password;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (allFieldsAreValid) setOpenRegModal(true);
  };

  const handleBlur = (e) => {
    if (e.target.name === "studentNumber") {
      if (!studentRe.test(state.studentNumber)) {
        setErrorMessage({
          ...errorMessage,
          studentMsg: error.studentValidation,
        });
      } else {
        setErrorMessage({ ...errorMessage, studentMsg: "" });
      }
    } else if (e.target.name === "password") {
      if (!passRe.test(state.password)) {
        setErrorMessage({
          ...errorMessage,
          passwMsg: error.passwordValidation,
        });
      } else {
        setErrorMessage({ ...errorMessage, passwMsg: "" });
      }
    } else if (e.target.name === "confirmPassword") {
      if (isPasswordMatch) {
        setErrorMessage({
          ...errorMessage,
          confirmMsg: error.passwordsDontMatch,
        });
      } else {
        setErrorMessage({ ...errorMessage, confirmMsg: "" });
      }
    }
  };

  const error = {
    studentValidation: "Student number must be a 10-digit number",
    passwordValidation:
      "Password must have at least 8 characters containing at least 1 special character, 1 uppercase letter, and 1 number",
    passwordsDontMatch: "Passwords don't match ",
  };

  return (
    <>
      <div className="register">
        <form onSubmit={handleSubmit}>
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
            <p className="text-subtitle" style={{ margin: "5px 0 15px 0" }}>
              Fill up the form to create your student account.
            </p>
            <Box>
              <RVOSTextField
                name="studentNumber"
                value={state.studentNumber}
                onChange={(e) =>
                  dispatch({
                    type: "newStudentNumber",
                    payload: e.target.value,
                  })
                }
                onBlur={handleBlur}
                placeholder="Student Number"
                width={300}
                marginTop={10}
                required
              />

              <RVOSSelect
                placeholder="Year Level"
                options={["1", "2", "3", "4", "5"]}
                value={state.yearLevel}
                onChange={(e) =>
                  dispatch({ type: "newYearLevel", payload: e.target.value })
                }
                width={120}
                marginLeft={8}
                marginRight={2}
                required
              />
            </Box>

            {!studentRe.test(state.studentNumber) && errorMessage.studentMsg && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <Error fontSize="small" sx={{ mr: 1, fontSize: 12 }} />
                <p style={{ fontSize: 12, width: 430 }}>
                  {errorMessage.studentMsg}
                </p>
              </Box>
            )}

            <RVOSTextField
              value={state.firstName}
              onChange={(e) =>
                dispatch({ type: "newFirstName", payload: e.target.value })
              }
              placeholder="First Name"
              width={430}
              marginTop={10}
              required
            />

            <Box>
              <RVOSTextField
                value={state.middleName}
                onChange={(e) =>
                  dispatch({ type: "newMiddleName", payload: e.target.value })
                }
                placeholder="Middle Name"
                width={200}
                marginTop={10}
                required
              />
              <RVOSTextField
                value={state.lastName}
                onChange={(e) =>
                  dispatch({ type: "newLastName", payload: e.target.value })
                }
                placeholder="Last Name"
                width={200}
                marginLeft={8}
                marginTop={10}
                required
              />
            </Box>

            <RVOSSelect
              placeholder="College"
              options={["College of Information and Computing Sciences"]}
              value={state.college}
              onChange={(e) =>
                dispatch({ type: "newCollege", payload: e.target.value })
              }
              width={450}
              marginRight={2}
              required
            />

            <RVOSSelect
              placeholder="Program"
              options={[
                "Computer Science",
                "Information Technology",
                "Information Systems",
              ]}
              value={state.program}
              onChange={(e) =>
                dispatch({ type: "newProgram", payload: e.target.value })
              }
              width={450}
              marginRight={2}
              required
            />

            <RVOSTextField
              name="password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "newPassword", payload: e.target.value })
              }
              onBlur={handleBlur}
              type="password"
              placeholder="Enter Password"
              width={430}
              marginTop={10}
              required
            />

            {!passRe.test(state.password) && errorMessage.passwMsg && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <Error fontSize="small" sx={{ mr: 1, fontSize: 12 }} />
                <p style={{ fontSize: 12, width: 430 }}>
                  {errorMessage.passwMsg}
                </p>
              </Box>
            )}

            <RVOSTextField
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "newConfirmPassword",
                  payload: e.target.value,
                })
              }
              onBlur={handleBlur}
              type="password"
              placeholder="Confirm Password"
              width={430}
              marginTop={10}
              required
            />

            {isPasswordMatch && errorMessage.confirmMsg && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <Error fontSize="small" sx={{ mr: 1, fontSize: 12 }} />
                <p style={{ fontSize: 12, width: 430 }}>
                  {errorMessage.confirmMsg}
                </p>
              </Box>
            )}

            <Box
              mt={2}
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <PrimaryButton type="submit" width={217} text="Submit" />
              <SecondaryButton width={217} text="Cancel" />
            </Box>
            <p className="text-subtitle" style={{ margin: "15px 0 0" }}>
              Already have an account?{" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </Box>
        </form>
        <Modal open={openRegModal} onClose={() => setOpenRegModal(false)}>
          <Box sx={style}>
            <CheckCircle sx={{ fontSize: 100, color: "#77DD77" }} />
            <Typography
              variant="h5"
              sx={{ color: "#77DD77", fontWeight: "600" }}
            >
              Success!
            </Typography>
            <Typography variant="small" sx={{ color: "#434343" }}>
              Details are now being saved.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
