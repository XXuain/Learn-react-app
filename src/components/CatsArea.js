import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
// import { List, Typography, Divider } from 'antd';

export default function CatsArea() {
  const params = useParams();
  console.log(params);
  return <Fragment>CatsArea</Fragment>;
}
