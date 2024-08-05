import { Menu } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setIsOpen(newOpen);
  };

  const DrawerList = (
    <Box
      component="div"
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {['Home', 'Chat Rooms', 'Profile'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <Button onClick={() => toggleDrawer(true)}>
        <Menu />
      </Button>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <ThemeToggle />
    </div>
  );
};

export default MobileNavbar;
