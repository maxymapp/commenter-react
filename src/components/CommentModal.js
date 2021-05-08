import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { nanoid } from "@reduxjs/toolkit";
import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";
import { submitComment } from "store/slices/commentsSlice";
import "./Comments.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onCommentChanged = (e) => setComment(e.target.value);

  const onCommentSubmit = () => {
    if (name && comment) {
      dispatch(
        submitComment({
          id: nanoid(),
          name,
          comment,
        })
      );
      setName("");
      setComment("");
      handleClose();
    }
  };

  // since I want a modal dialog, I will use Dialog component rather than directly using lower-level construct Modal
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Share what you think with the community
        </DialogContentText>
        <form>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={onNameChanged}
          />
          <textarea
            placeholder="Comment"
            id="comment"
            value={comment}
            onChange={onCommentChanged}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onCommentSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentModal;
