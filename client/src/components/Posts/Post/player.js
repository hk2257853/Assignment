import React from "react";
import ReactPlayer from "react-player";
import useStyles from "./styles";

const Player = ({videoLink}) => {
  const classes = useStyles();
    return (
        <ReactPlayer className={classes.media} url={videoLink} controls/>
  );
};

export default Player;
