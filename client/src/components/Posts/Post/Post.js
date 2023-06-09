import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment"; // stuff like a min ago, 5 min ago etc
import { useDispatch } from "react-redux";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ReactPlayer from "react-player";

import useStyles from "./styles";
import { likePost, deletePost } from "../../../actions/posts";
import Player from "./player";
import { createHistory } from "../../../api";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  // TODO: update time in history if I watch the video again (later)
  const handleVideoStart = async () => {
    // e.preventDefault();
    console.log("video started")
    dispatch(createHistory(post));
  };

  const Likes = () => {
    console.log(post.likes.length);
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  // this html code is for inner layout for each card
  return (
    // console.log(post.videoLink),
    <Card className={classes.card}>
      {/* <CardMedia
        component="video"
        className={classes.media}
        src={
          post.videoLink ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
        controls
      />      */}
      <div >
      <ReactPlayer className={classes.media} url={post.videoLink} onPlay={handleVideoStart } controls/>
      </div>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId || user?.result?._id) === post?.creator && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {
            post.tags.map(
              (tag) => `#${tag} `
            ) /* Adding # b4 each tag/string in array */
          }
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId || user?.result?._id) === post?.creator && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
