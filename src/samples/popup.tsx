import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { makeStyles } from '@material-ui/core/styles';

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
      <div className={classes.root}></div>
      <div className={classes.root}></div>
      <a data-tip data-for='global' onClick={() => alert('hello!')}> σ`∀´)σ </a>
      <a data-tip data-for='global'> (〃∀〃) </a>
      <ReactTooltip id='global' aria-haspopup='true' >
        <p>This is a global react component tooltip</p>
        <img src={`${window.location.origin}/logo192.png`} />
        <p>You can put every thing here</p>
        <ul>
          <li>Word</li>
          <li>Chart</li>
          <li>Else</li>
        </ul>
      </ReactTooltip>
      <p>here</p>
      <p>here</p>

    </>
  );
}
