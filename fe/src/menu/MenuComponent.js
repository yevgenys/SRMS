import {
    Box,
    CssBaseline,
    Divider,
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
import MuiDrawer from '@mui/material/Drawer';
import {Link, useLocation} from 'react-router-dom';
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
import {routes} from "../router/RouterComponent";
import {
    COURSE_ADD_NAVNAME,
    COURSE_LIST_NAVNAME,
    DRAWER_WIDTH,
    RESULT_ADD_NAVNAME,
    RESULT_LIST_NAVNAME,
    STUDENT_ADD_NAVNAME,
    STUDENT_LIST_NAVNAME
} from "../_common/constants";
import {DrawerHeader} from "../_common/drawer";

const openedMixin = (theme) => ({
    width: DRAWER_WIDTH,
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: DRAWER_WIDTH,
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

export default function MenuComponent() {
    const theme = useTheme();
    const location = useLocation();
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
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem key="Home" disablePadding>
                        <ListItemButton
                            component={Link}
                            to={routes.find(o => o.navname === 'Home').path}
                            selected={location.pathname === routes.find(o => o.navname === 'Home').path}
                        >
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {[STUDENT_ADD_NAVNAME, STUDENT_LIST_NAVNAME].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={routes.find(o => o.navname === text).path}
                                selected={location.pathname === routes.find(o => o.navname === text).path}
                            >
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
                    {[COURSE_ADD_NAVNAME, COURSE_LIST_NAVNAME].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={routes.find(o => o.navname === text).path}
                                selected={location.pathname === routes.find(o => o.navname === text).path}
                            >
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
                    {[RESULT_ADD_NAVNAME, RESULT_LIST_NAVNAME].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={routes.find(o => o.navname === text).path}
                                selected={location.pathname === routes.find(o => o.navname === text).path}
                            >
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