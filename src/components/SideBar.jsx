import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Stack } from '@mui/material';
import { Array1, Array2, Array3 } from './SideArr';
import { useNavigate } from 'react-router';
import { grey } from '@mui/material/colors';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

function SideBar({ DrawerHeader, handleDrawerClose, open }) {

    const theme = useTheme();
    const navi = useNavigate()

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Stack className="my-2 text-center w-100" gap={1}>
                <Avatar
                    className='mx-auto'
                    alt="Mohamed Mokhtar"
                    src="https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
                    sx={{
                        width: open ? 95 : 44,
                        height: open ? 95 : 44,
                        transition: 'all .228s ease',
                        outline: open ? `1px solid ${theme.palette.text.primary}` : 'none',
                        border: open ? `4px solid ${theme.palette.background.default}` : 'none',
                    }}
                />
                <h5
                    className='m-0'
                    style={{
                        transition: 'all .228s ease',
                        fontSize: open ? 1.3 + 'rem' : 0 + 'px',
                    }}
                >
                    Mohamed Mokhtar
                </h5>

                <span
                    style={{
                        color: theme.palette.primary.main,
                        fontSize: open ? 1 + 'rem' : '.9rem',
                        transition: 'all .228s ease',
                    }}
                >
                    Admin
                </span>
            </Stack>


            <Divider />
            <List>
                {Array1.map((item, index) => (
                    <ListItem key={index}
                        disablePadding sx={{ display: 'block' }}

                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                background: item.path === location.pathname ? grey[theme.palette.mode === 'dark' ? 800 : 300] : 'none'
                            }}
                            onClick={_ => navi(item.path)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array2.map((item, index) => (
                    <ListItem key={index}
                        disablePadding sx={{ display: 'block' }}

                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                background: item.path === location.pathname ? grey[theme.palette.mode === 'dark' ? 800 : 300] : 'none'
                            }}
                            onClick={_ => navi(item.path)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array3.map((item, index) => (
                    <ListItem key={index}
                        disablePadding sx={{ display: 'block' }}

                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                background: item.path === location.pathname ? grey[theme.palette.mode === 'dark' ? 800 : 300] : 'none'
                            }}
                            onClick={_ => navi(item.path)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideBar
