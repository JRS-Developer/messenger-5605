import { Button } from "@material-ui/core";

const SubmitButton = ({ classes, children }) => (
  <Button
    type="submit"
    color="primary"
    variant="contained"
    size="large"
    className={classes.formButton}
  >
    {children}
  </Button>
);

export default SubmitButton;
