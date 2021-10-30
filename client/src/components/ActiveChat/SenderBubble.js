import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: ".5rem",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  last:{
    order: 2
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  imagesBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  imageOne: {
    width: "9rem",
    maxHeight: "9rem",
    borderRadius: '10px 10px 0 10px',
    objectFit: 'cover',
  },
  imageMany: {
    width: "6rem",
    height: "6rem",
    borderRadius: '10px 10px 0 10px',
    objectFit: 'cover',
    maxHeight: 100
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, images } = props;

  return (
    <Box className={classes.root}>
      <Typography
        className={`${classes.date} ${
          images && images.length > 1 ? classes.last : ""
        }`}
      >
        {time}
      </Typography>
      {text && (
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
      <Box
        className={`${images && images.length > 1 ? classes.imagesBox : ""}`}
      >
        {images &&
          images.map((image) => (
            <img
              className={`${
                images.length > 1 ? classes.imageMany : classes.imageOne
              }`}
              src={image}
              alt=""
            />
          ))}
      </Box>
    </Box>
  );
};

export default SenderBubble;
