import { makeStyles } from "@material-ui/core/styles";
import BgImg from "../../images/bg-img.png";

const useAuthStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
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
    flexGrow: "1",

    [theme.breakpoints.down("sm")]: {
      margin: "1rem",
    },
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
    color: theme?.palette?.primary?.main || "#3A8DFF",
    boxShadow: `0px 0px 10px -1px #4a699533`,
    padding: "1rem 1.5rem",
    minWidth: '8rem'
  },
  formButton: {
    fontFamily: "Montserrat",
    padding: "1rem 3rem",
    marginTop: "3rem",
    backgroundColor: theme?.palette?.primary?.main || "#3A8DFF",
  },
  // Containers
  topHeader: {
    width: '100%',
    display: "flex",
    flexWrap: 'wrap',
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

    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  form: {
    display: 'flex',
    flexDirection:'column',
    gap:'1rem',
    width: '100%'
  }
}));

export default useAuthStyles;
