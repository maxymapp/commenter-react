import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { selectAllComments } from "../store/slices/commentsSlice";
import { getTopCommentersTrio } from "../utils/getTopCommentersTrio";
import Avatar from "@material-ui/core/Avatar";
import { getInitials } from "../utils/getInitials";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import "./TopCommenters.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
    },
  })
);

const TopCommenters = () => {
  const comments = useSelector(selectAllComments);
  const topCommentersTrio = getTopCommentersTrio(comments);
  const classes = useStyles();

  return (
    <Container fixed>
      <h3>Top 3 Commenters</h3>
      {topCommentersTrio.map((com, index) => (
        <div className={"topCommenter"} key={index}>
          <Avatar className={classes.orange}>{getInitials(com[0])}</Avatar>
          <span className="commenter-name">{com[0]}</span>
          <span className="comment-count">
            Count: <span>{com[1]}</span>
          </span>
        </div>
      ))}
    </Container>
  );
};
export default TopCommenters;
