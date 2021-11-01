import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: ".5rem",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
  image: {
    width: ({ images }) => (images && images.length > 0 ? "9rem" : "6rem"),
    maxHeight: ({ images }) => (images && images.length > 0 ? "9rem" : "6rem"),
    borderRadius: "10px 10px 10px 10px",
    objectFit: "cover",
  },
  imagesBox: ({ images }) =>
    images && images.lenth > 0
      ? {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }
      : {},
}));

const OtherUserBubble = (props) => {
  const { text, time, otherUser, images } = props;
  const classes = useStyles({ images });
  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      ></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {text && (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
        <Box className={classes.imageBox}>
          {images &&
            images.map((image) => (
              <img
                className={classes.image}
                src={image}
                alt="user sent-media"
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
