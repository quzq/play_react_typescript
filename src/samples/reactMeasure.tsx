import React, { useState } from 'react';
import Measure from 'react-measure'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 10,
    height: 200,
    background: 'blue',
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
      <div className={classes.grid}>
        <Measure bounds onResize={(contentRect) => {
          if (!contentRect.bounds) console.log('')
          else {
            //const newHeight = getScreenHeight() - contentRect.bounds.bottom
            const screenHeight = getScreenHeight()
            const newHeight = screenHeight - (contentRect.bounds.bottom - contentRect.bounds.top)
            if (newHeight) setHeight(newHeight)
            console.log(screenHeight, height, contentRect)
          }
        }}>
          {({ measureRef }) =>
            <div ref={measureRef} className={classes.gridInner}>
              <div style={{ height: height, background: 'red' }}>
                saassa
            </div>
            </div>
          }
        </Measure>

      </div>
    </>
  );
}
