import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 60,
    marginRight: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    cursor: 'pointer'
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
}));

const Header = () => {
  const classes = useStyles();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const history = useHistory();

  const onAvatarClick = (event) => {
    console.log('onAvatarClick!!');
    setMenuAnchorEl(event.currentTarget);
  }
  const onMenuClose = () => {
    console.log('onMenuClose!!');
    setMenuAnchorEl(null);
  }
  const onProfileClick = () => {
    console.log('onProfileClick!!');
    setMenuAnchorEl(null);
  }
  const onLogoutClick = () => {
    console.log('onLogoutClick!!');
    history.push('/')
    setMenuAnchorEl(null);
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        <img src="/tecb_logo.png" alt="logo" className={classes.logo} />
        <section className={classes.rightToolbar}>
          <Avatar className={classes.avatar} onClick={onAvatarClick} aria-controls="menu" aria-haspopup="true"/>
          <Menu
            id="menu"
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={onMenuClose}
            anchorEl={menuAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={onProfileClick}>プロフィール</MenuItem>
            <MenuItem onClick={onLogoutClick}>ログアウト</MenuItem>
          </Menu>
        </section>
      </Toolbar>
    </AppBar>
  )
}
export default Header;
