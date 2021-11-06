import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import BgImg from "./images/bg-img.png";
import bubble from "./images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: '100%',
    display: 'flex',
  },
  // Sides
  sideImg: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `linear-gradient(to bottom, #3a8dff99, #86B9FF),url(${BgImg})`,
    minHeight: "100vh",
    width: "45vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sideForm: {
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",

    [theme.breakpoints.down('sm')]: {
      margin: "1rem",
    }
  },
  // Text
  smallText: {
    fontSize: ".8rem",
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    marginBottom: "2rem",
  },
  imgText: {
    color: "#ffffff",
    fontSize: "1.5rem",
    marginTop: "2rem",
    maxWidth: "70%",
    textAlign: "center",
  },
  // Buttons
  whiteButton: {
    fontFamily: "Montserrat",
    backgroundColor: "#ffffff",
    color: theme?.palette?.primary?.main,
    boxShadow: `0px 0px 10px -1px #4a699533`,
    padding: "1rem 1.5rem",
  },
  formButton: {
    fontFamily: "Montserrat",
    padding: "1rem 3rem",
    marginTop: "3rem",
  },
  // Containers
  topHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "1rem",
  },
  formContainer: {
    height: "100%",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();

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
      <Box className={classes.sideImg}>
        <img src={bubble} alt="Background" />
        <Typography className={classes.imgText}>
          Converse with anyone with any language
        </Typography>
      </Box>
      <Box flexGrow={1} className={classes.sideForm}>
        <Grid container className={classes.topHeader}>
          <Typography color="secondary">Don’t have an account?</Typography>
          <Button
            onClick={() => history.push("/register")}
            className={classes.whiteButton}
          >
            Create account
          </Button>
        </Grid>
        <Box className={classes.formContainer}>
          <Typography
            variant="h4"
            className={`${classes.title} ${classes.bold}`}
          >
            Welcome Back!
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container direction="column">
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
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  size="large"
                  className={classes.formButton}
                >
                  Login
                </Button>
              </Grid>
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
