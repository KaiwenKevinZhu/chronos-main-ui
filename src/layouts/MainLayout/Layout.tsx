import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header, { HeaderInterface } from '@/components/organisms/Header/Header';
import Footer, { FooterInterface } from '@/components/organisms/Footer/Footer';

interface LayouInterface extends HeaderInterface, FooterInterface {
  children: React.ReactNode;
};

const Layout = ({ theme, isLogin, children }: LayouInterface): JSX.Element => {

  return (
    <React.Fragment>
        <div>
            {/* <head></head> */}
            <Header theme={theme} isLogin={isLogin} />
            {children}
            {/* <footer></footer> */}
            <Footer theme={theme} isLogin={isLogin} />
        </div>
    </React.Fragment>
  );
};

export default Layout;