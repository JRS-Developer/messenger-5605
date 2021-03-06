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
  dateLast: ({ images, text }) =>
    text && images?.length > 1 ? { order: 2 } : {},
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
  bubbleLast: ({ images }) => (images?.length === 1 ? { order: 2 } : {}),
  image: {
    width: ({ images }) => (images?.length > 1 ? "6rem" : "9rem"),
    maxHeight: ({ images }) => (images?.length > 1 ? "6rem" : "9rem"),
    borderRadius: "10px 10px 10px 10px",
    objectFit: "cover",
  },
  imagesBox: ({ images }) =>
    images?.length > 1
      ? {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }
      : {},
}));

const SenderBubble = (props) => {
  const { time, text, images } = props;

  const classes = useStyles({ images, text });

  return (
    <Box className={classes.root}>
      <Typography className={`${classes.date} ${classes.dateLast}`}>
        {time}
      </Typography>
      {text && (
        <Box className={`${classes.bubble} ${classes.bubbleLast}`}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
      <Box className={classes.imagesBox}>
        {images &&
          images.map((image) => (
            <img className={classes.image} src={image} alt="user-sent media" />
          ))}
      </Box>
    </Box>
  );
};

export default SenderBubble;
