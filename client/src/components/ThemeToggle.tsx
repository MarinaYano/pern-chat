import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { createContext, useContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div>
      {theme.palette.mode} mode
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
