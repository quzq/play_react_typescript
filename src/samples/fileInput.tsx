import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 10,
    height: 200,
  },
  grid: {
    width: '100%',
    height: '100%',
  },
  gridInner: {
    width: '100%',
    height: '100%',
  }
});


const getScreenHeight = (): number => document.documentElement.clientHeight

export default () => {
  const classes = useStyles();
  const [height, setHeight] = useState(0)


  return (
    <>
      <input
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
      </Button>
      </label>
    </>
  );
}
