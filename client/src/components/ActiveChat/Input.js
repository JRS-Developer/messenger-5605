import React, { useState } from "react";
import { FormControl, FilledInput, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import { AddPhotoAlternateOutlined } from "@material-ui/icons";
import ImagesContainer from "./ImagesContainer";

const cloudinaryURI = "https://api.cloudinary.com/v1_1/jrscloud/upload";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const saveImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "lrjzbnj9");
      const response = await fetch(cloudinaryURI, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeImages = async (event) => {
    const files = event.target.files;
    const newImages = await Promise.all(
      Array.from(files).map(async (file) => {
        return await saveImage(file);
      })
    );

    if (newImages) {
      setImages((old) => [...old, ...newImages]);
    }
    // Clean the value to can upload more files
    event.target.value = "";
  };

  const removeImage = (id) =>
    setImages((old) => old.filter((img) => img.asset_id !== id));

  const resetImages = () => setImages([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    if (text || images.length > 0) {
      const reqBody = {
        text,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user,
        attachments: images.map((image) => image.url),
      };
      await postMessage(reqBody);
      setText("");
      resetImages();
    }
  };

  return (
    <div>
      <ImagesContainer
        images={images}
        reseter={resetImages}
        deleter={removeImage}
      />
      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={handleChange}
            endAdornment={
              <>
                <IconButton>
                  <label htmlFor="image-upload">
                    <AddPhotoAlternateOutlined color="secondary" />
                  </label>
                </IconButton>
                <input
                  multiple
                  accept="image/*"
                  id="image-upload"
                  hidden
                  type="file"
                  onChange={handleChangeImages}
                />
              </>
            }
          />
        </FormControl>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
