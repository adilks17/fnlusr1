import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, FormControl, IconButton, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import logo from './logo.png';
import { InputAdornment, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const drawerWidth = 240;
const navItems = ['Home', 'Raises', 'Others'];

export default function Main(props) {
  const { window, onLogout, isLoggedIn, userId, navigate } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Beingwell{userId}
      </Typography>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          item === 'Others' ? (
            <ListItem key={item} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
              <FormControl variant="standard">
                <Select
                  value={item.toLowerCase()}
                  onChange={(e) => navigate(`/${e.target.value}`)}
                >
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="raises">Raises</MenuItem>
                  <MenuItem value="contact">Contact</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
      {isLoggedIn && (
        <Box mt={2}>
          <Button color='error' onClick={onLogout}>Logout</Button>
        </Box>
      )}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  var [heve, setHeve] = React.useState({
    "Leve": '',
    "userId":userId,
    "Response": 'Not Responded'
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setHeve((heve) => ({ ...heve, [name]: value }));
  };

  const addHandler = () => {
    axios.post("http://localhost:3005/newheve", heve)
      .then((response) => {
        alert("Record Saved");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <DragHandleIcon style={{ color: '#000' }}  />
          </IconButton>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            {!isMobile && navItems.map((item) => (
              item === 'Others' ? (
                <FormControl variant="standard" key={item}>
                  <Select
                    value={item.toLowerCase()}
                    onChange={(e) => navigate(`/${e.target.value}`)}
                    sx={{ color: '#000' }}
                    className='abarbtn'
                  >
                    <MenuItem value="home">Home</MenuItem>
                    <MenuItem value="raises">Raises</MenuItem>
                    <MenuItem value="contact">Contact</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <Button
                  key={item}
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                  sx={{ color: '#000' }}
                  className='abarbtn'
                >
                  {item}
                </Button>
              )
            ))}
            {isLoggedIn && (
              <Button color='error' style={{alignItems:'right'}} onClick={onLogout}>Logout</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, position: 'relative', flexGrow: 1 }}>
        <Toolbar />
        {/* Content of the component */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 9999, // Set a high z-index value
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TextField
            fullWidth
            label="Type a message..."
            variant="outlined"
            name="Leve"
            value={heve.Leve}
            onChange={inputHandler}
            multiline
            rows={4}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="delete"  onClick={addHandler} >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
