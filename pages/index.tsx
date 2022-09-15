import React from 'react';
import Application from "../src/Application";
import MainPage from '../src/components/pages/MainPage';

const IndexPage = ():JSX.Element => {
  return <Application component ={MainPage}/>;
};

export default IndexPage;
