import React, { useState } from 'react';
import * as _ from 'lodash';
import {
  Paper,
  Grid,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';

interface IProps {
  rect: string;
  caption: string;
  onClick(): void;
  active: boolean;
  fillColor: string;
  isEmergency: boolean;
  isUpdating: boolean;
}

const Rect: React.SFC<IProps> = (props: IProps) => {
  const coordinates = props.rect
    .trim()
    .split(' ')
    .map((i) => {
      const points = i.split(',');
      return { x: parseInt(points[0]) || 0, y: parseInt(points[1]) || 0 };
    });
  //const textCoordinate = _.first(coordinates) || { x: 0, y: 0 };
  const minCoordinate = {
    x: (_.minBy(coordinates, 'x') || { x: 10 }).x,
    y: (_.minBy(coordinates, 'y') || { y: 10 }).y,
  };
  const sumCoordinate = coordinates.reduce(
    (prev, curr) => ({ x: prev.x + curr.x, y: prev.y + curr.y }),
    { x: 10, y: 10 }
  );
  const textCoordinate = {
    x: Math.floor((minCoordinate.x + sumCoordinate.x / coordinates.length) / 2),
    y: Math.floor(sumCoordinate.y / coordinates.length),
  } || { x: 10, y: 10 };
  console.log(textCoordinate, coordinates);
  return (
    <React.Fragment>
      <text
        x={textCoordinate.x}
        y={textCoordinate.y}
        style={{ fontSize: 11 }}
        transform={`rotate(330 ${textCoordinate.x} ${textCoordinate.y})`}>
        {props.caption}
      </text>
      <polygon
        points={props.rect}
        style={{
          fill: props.active ? 'red' : props.fillColor,
          fillOpacity: 0.5,
          stroke: props.isEmergency
            ? 'red'
            : props.isUpdating
            ? 'green'
            : 'black',
          strokeWidth: 1,
        }}
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

interface IRectsProps{}

const Rects: React.SFC<IRectsProps> = (props: IRectsProps) => {
  const currentFloorInfo = [
    {floorPoints:'70,30,90,30,90,90,70,90',caption:'fdsaf'},
    
  ]
  return (
            <Paper>
              <svg x="0" y="0" width="800" height="600">
                  { currentFloorInfo.map((r: any) => {
                      return (
                        <Rect
                          rect={r.floorPoints}
                          caption={r['caption']}
                          onClick={() => null}
                          active={false
                          }
                          isEmergency={false}
                          isUpdating={false}
                          fillColor={
                            'none'
                          }></Rect>
                      );
                    })}
              </svg>
        </Paper>
  )
}

export default Rects