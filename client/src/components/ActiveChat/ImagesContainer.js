import { Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Cancel } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10
  },
  restart: {
    marginRight: "auto",
  },
  deleteB: {
    opacity: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "opacity .2s",

    "&:hover": {
      opacity: 100,
      transition: "opacity .2s",
    },
  },
  imageBox: {
    position: "relative",
  },
  image: {
    height: 80,
    borderRadius: 10
  },
}));

const ImagesContainer = ({ images, reseter, deleter }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {images.length > 0 && (
        <IconButton onClick={reseter} className={classes.restart}>
          <Cancel color="secondary" />
        </IconButton>
      )}
      {images.map((image) => (
        <Box className={classes.imageBox}>
          <IconButton className={classes.deleteB}>
            <Cancel />
          </IconButton>
          <img
            className={classes.image}
            src={image.url}
            key={image.asset_id}
            alt={image.original_filename}
            onClick={() => deleter(image.asset_id)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImagesContainer;
