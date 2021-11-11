import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import useAuthStyles from "./components/Auth/useAuthStyles.js";
import SideImg from "./components/Auth/SideImg";
import SubmitButton from "./components/Auth/SubmitButton";
import FormTitle from "./components/Auth/FormTitle";
import FormHeader from "./components/Auth/FormHeader";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useAuthStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid className={classes.root}>
      <SideImg classes={classes} />
      <Box className={classes.sideForm}>
        <FormHeader
          classes={classes}
          text="Already have an account?"
          buttonText="Login"
          clickHandler={() => history.push("/login")}
        />
        <Box className={classes.formContainer}>
          <FormTitle classes={classes}>Create an account.</FormTitle>
          <form onSubmit={handleRegister} className={classes.form}>
            <FormControl required>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
              />
            </FormControl>
            <FormControl required>
              <TextField
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
              />
            </FormControl>
            <FormControl error={!!formErrorMessage.confirmPassword} required>
              <TextField
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <FormControl error={!!formErrorMessage.confirmPassword} required>
              <TextField
                label="Confirm Password"
                aria-label="confirm password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="confirmPassword"
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <Grid justifyContent="center" container>
              <SubmitButton classes={classes}>Create</SubmitButton>
            </Grid>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
