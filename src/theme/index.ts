import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';
import { commonTheme } from './palette';

/**
 * getThem is a function () => GlobalTheme
 * @param mode 
 */
const getTheme: () => Theme = () => {
  return {
    ...responsiveFontSizes({
      ...createTheme({
        palette: commonTheme,
        typography: {
          fontFamily: 'Montserrat',
          h3: {
            fontFamily: 'MontserratBold',
            fontWeight: 'bold',
            fontSize: '3rem',
            lineHeight: 1.5,
          },
          h5: {
            fontFamily: 'MontserratBold',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1.5,
          },
          subtitle1: {
            fontSize: '1.5rem',
            lineHeight: 1.7,
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
          },
          body2: {
            fontSize: '.875rem',
            lineHeight: 1.5,
          },
        },
        zIndex: {
          appBar: 1200,
          drawer: 1100,
        },
      }),
    })
  };
};

export default getTheme;