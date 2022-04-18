import { Box } from "@mui/material";
import React, { useReducer } from "react";
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
          <p className="text-subtitle" style={{ margin: "5px 0 15px 0" }}>
            Fill up the form to create your student account.
          </p>

          <Box>
            <RVOSTextField
              value={state.studentNumber}
              onChange={(e) =>
                dispatch({ type: "newStudentNumber", payload: e.target.value })
              }
              placeholder="Student Number"
              width={300}
              marginTop={10}
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
            />
          </Box>

          <RVOSTextField
            value={state.firstName}
            onChange={(e) =>
              dispatch({ type: "newFirstName", payload: e.target.value })
            }
            placeholder="First Name"
            width={430}
            marginTop={10}
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
          />

          <RVOSTextField
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "newPassword", payload: e.target.value })
            }
            type="password"
            placeholder="Enter Password"
            width={430}
            marginTop={10}
          />
          <RVOSTextField
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch({ type: "newConfirmPassword", payload: e.target.value })
            }
            type="password"
            placeholder="Confirm Password"
            width={430}
            marginTop={10}
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
          <p className="text-subtitle" style={{ margin: "15px 0 0" }}>
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
