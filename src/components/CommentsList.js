import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import {
  fetchComments,
  selectAllComments,
} from "../store/slices/commentsSlice";
import Comment from "./Comment";
import "./Comments.css";

const CommentsList = () => {
  const dispatch = useDispatch();

  const comments = useSelector(selectAllComments);
  const commentsStatus = useSelector((state) => state.comments.status);

  useEffect(() => {
    if (commentsStatus === "idle") {
      dispatch(fetchComments());
    }
  }, [commentsStatus, dispatch]);

  return (
    <Container fixed>
      <h3>Comments</h3>
      {comments &&
        comments.length > 0 &&
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
    </Container>
  );
};
export default CommentsList;
