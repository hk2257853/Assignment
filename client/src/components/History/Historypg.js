import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // to fetch data from redux store
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getHistory } from "../../actions/history";

import History from "./History/History";
import useStyles from "./styles";

const Historypg = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  const classes = useStyles();
  const history = useSelector((state) => state.history);
  console.log(history);

  // if len != 0 show the posts else CircularProgress
  // the hmtl code here is for the outer layout. just comment/change values n play
  return !history.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {history.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <History post={post} />{" "}
        </Grid>
      ))}
    </Grid>
  );
};

export default Historypg;
