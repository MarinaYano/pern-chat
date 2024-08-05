import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { Box } from '@mui/material';
import MobileNavbar from '../components/layout/MobileNavbar';

const Layout = () => {
  return (
    <div className="flex">
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Navbar />
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <MobileNavbar />
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
