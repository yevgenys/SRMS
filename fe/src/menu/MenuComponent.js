import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {useState} from "react";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MenuComponent(props) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Student Result Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem key="Home" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {['Add New Students', 'Students List'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <GroupAddIcon/> : <RecentActorsIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Add New Courses', 'Courses List'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <DomainAddIcon/> : <ListAltIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Add New Results', 'Results List'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <PostAddIcon/> : <SummarizeIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}