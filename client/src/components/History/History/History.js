import React, { useState, useEffect } from "react";
import {
  Card,
} from "@material-ui/core/";
import useStyles from "./styles";
import Player from "../../Posts/Post/player";

const History = ({ post }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  
  // this html code is for inner layout for each card
  return (
    console.log(post.videoLink),
    <Card className={classes.card}>
      <Player videoLink={post.videoLink} controls></Player>
    </Card>
  );
};

export default History;
