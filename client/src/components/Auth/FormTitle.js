import { Typography } from "@material-ui/core";

const FormTitle = ({ classes, children }) => (
  <Typography variant="h4" className={`${classes.title} ${classes.bold}`}>
    {children}
  </Typography>
);

export default FormTitle;
