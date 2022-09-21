import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { jssPreset, makeStyles } from '@material-ui/core';

interface Props {
  onSidebarOpen: () => void;
  themeMode: any
}

const Topbar = ({ onSidebarOpen, themeMode}: Props): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="primary">
        <Toolbar>
        <img src="/resources/home/logo.png" width={"50px"}/>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Projects</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;