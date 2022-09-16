import React from 'react';
import Application from "../src/Application";
import HomePage from '../src/views/Home/HomePage';

const IndexPage = ():JSX.Element => {
  return <Application component ={HomePage}/>;
};

export default IndexPage;
