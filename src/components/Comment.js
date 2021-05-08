import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { getInitials } from "../utils/getInitials";
import { deepPurple } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  })
);

const Comment = (props) => {
  const { comment } = props;
  const classes = useStyles();
  // API has "body" key for comment text, mockComments has "comment" for comment text
  const content = comment.body ? comment.body : comment.comment;

  return (
    <div className="comment-box">
      <div className="commenter-info">
        <Avatar className={classes.purple}>{getInitials(comment.name)}</Avatar>
        <span className="commenter-name">{comment.name}</span>
      </div>
      <p className="comment-content">{content}</p>
    </div>
  );
};

export default Comment;
