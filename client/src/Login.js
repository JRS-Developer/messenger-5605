import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import useAuthStyles from "./components/Auth/useAuthStyles.js";
import SideImg from "./components/Auth/SideImg";
import SubmitButton from "./components/Auth/SubmitButton";
import FormTitle from "./components/Auth/FormTitle";
import FormHeader from "./components/Auth/FormHeader";

const Login = (props) => {
  const history = useHistory();
  const classes = useAuthStyles();

  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
          text="Don’t have an account?"
          buttonText="Create account"
          clickHandler={() => history.push("/register")}
        />
        <Box className={classes.formContainer}>
          <FormTitle classes={classes}>Welcome Back!</FormTitle>
          <form onSubmit={handleLogin} className={classes.form}>
            <FormControl margin="normal" required>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
              />
            </FormControl>
            <FormControl margin="normal" required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <Typography
                      color="primary"
                      className={`${classes.bold} ${classes.smallText}`}
                    >
                      Forgot?
                    </Typography>
                  ),
                }}
              />
            </FormControl>
            <Grid justifyContent="center" container>
              <SubmitButton classes={classes}>Login</SubmitButton>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
