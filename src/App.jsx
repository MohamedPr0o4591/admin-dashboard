import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { getDesignTokens } from './theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


function App() {

  const [mode, setMode] = React.useState(
    localStorage.mode ? localStorage.mode : 'dark'
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = _ => {
    setMode((prevMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    );
  }

  React.useEffect(() => {
    localStorage.mode = mode;
  }, [mode])


  const themeMode = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={themeMode}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          handleChangeTheme={handleChangeTheme}
        />

        <SideBar
          DrawerHeader={DrawerHeader}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
