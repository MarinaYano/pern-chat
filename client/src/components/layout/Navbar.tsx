import { Box, useTheme } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
      }}
      className="fit-content px-4 py-4 h-screen mb-4 shadow-lg"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-1.5">
          <MapsUgcIcon fontSize="large" />
        </div>
        <ThemeToggle />
      </div>
    </Box>
  );
};

export default Navbar;
