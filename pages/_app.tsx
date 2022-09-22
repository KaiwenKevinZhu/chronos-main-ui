import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { AppProps } from 'next/app';

import AOS from 'aos';
import getTheme from '@/theme';

interface ApplicationInterface {
  component: any;
  // All other props
  [x: string]: any;
}

/**
 * The main of application
 * @param Props 
 * @return JSX.Element
 */
export default function MyApp({
  Component,
  ...rest
}: AppProps): JSX.Element {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector('#jss-server-side');
    // if (jssStyles) {
    //   jssStyles.parentElement.removeChild(jssStyles);
    // }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });

  }, []);

  return (
    <>
    <StylesProvider injectFirst={true}>
      <ThemeProvider theme={getTheme()}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        maxSnack={3}>
          <Paper elevation={0}>
            <Component {...rest}/>
          </Paper>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
    </>
  );
}
