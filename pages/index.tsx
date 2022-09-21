import { MainLayout } from '@/layouts';
import React from 'react';
import HomePage from '../src/views/Home/HomePage';

const IndexPage = ():JSX.Element => {
  return (
    <MainLayout>
      <HomePage/>
    </MainLayout>
  );
};

export default IndexPage;
