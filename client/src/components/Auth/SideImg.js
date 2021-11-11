import bubble from "../../images/bubble.svg";
import { Box, Typography } from "@material-ui/core";

const SideImg = ({ classes }) => (
  <Box className={classes.sideImg}>
    <img src={bubble} alt="Bubble" />
    <Typography className={classes.imgText}>
      Converse with anyone with any language
    </Typography>
  </Box>
);

export default SideImg;
