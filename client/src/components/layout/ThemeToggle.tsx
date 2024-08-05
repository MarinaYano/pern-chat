import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { createContext, useContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light',
      }}
      className="px-1.5 flex items-center w-fit rounded-md"
    >
      <span className="pl-1.5 hidden md:block">{theme.palette.mode} mode</span>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <Brightness7 fontSize="small" />
        ) : (
          <Brightness4 fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
