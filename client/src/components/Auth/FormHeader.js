import { Grid, Typography, Button } from "@material-ui/core";

const FormHeader = ({ classes, text, buttonText, clickHandler }) => {
  return (
    <Grid className={classes.topHeader}>
      <Typography color="secondary">{text}</Typography>
      <Button
        onClick={clickHandler}
        className={classes.whiteButton}
      >
        {buttonText}
      </Button>
    </Grid>
  );
};
export default FormHeader;
