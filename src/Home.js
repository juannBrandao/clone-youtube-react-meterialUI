import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    List,
    Typography,
    ListItem,
    ListItemText,
    Divider,
    Icon,
    ListItemIcon,
    Box,
    ListSubheader,
    Grid,
    Hidden,
    Switch
}from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// 
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
// 
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const usestyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    AppBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    icons: {
        paddingRight: theme.spacing(2)
    },
    Menuicons: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    grow: {
        flexGrow: 1
    },
    logo: {
        height: 25
    },
    ListItemText: {
        fontSize: 14
    },
    ListItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    subheader: {
        textTransform: 'uppercase'
    }
}));
const videos = [
    {
        id: 1,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb6.png'
    },
    {
        id: 2,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb8.png'
    },
    {
        id: 3,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb1.png'
    },
    {
        id: 4,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb2.png'
    },
    {
        id: 5,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb3.png'
    },
    {
        id: 6,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb4.png'
    },
    {
        id: 7,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb5.png'
    },
    {
        id: 8,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb6.png'
    },
    {
        id: 9,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb7.png'
    },
    {
        id: 10,
        title: '7 COISAS QUE VOCÊ NÃO DEVERIA PERDER SEU TEMPO',
        channel: 'Juann',
        Views: '100 mi de vizualizações',
        date: 'há 15 dias',
        avatar: '/images/avatar.jpg',
        thumb: '/images/thumb8.png'
    },
]

function Home({darkMode, setDarkMode}) {
    const classes = usestyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.AppBar}>
                <Toolbar>
                    <IconButton edge="start"
                        className={classes.Menuicons}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png" } alt=" logo" className={classes.logo} />
                    <div className={classes.grow}> </div>
                    <Switch 
                    value={darkMode} 
                    onChange={() => setDarkMode(!darkMode)}
                    className={classes.icons}
                   />
                    <IconButton
                        className={classes.icons}
                       >
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton
                        className={classes.icons}
                       >
                        <AppsIcon />
                    </IconButton>
                    <IconButton
                        className={classes.icons}
                       >
                        <MoreVertIcon />
                    </IconButton>
                    <Button
                        variant='outlined'
                        color="secondary"
                        startIcon={<AccountCircleIcon />}>
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
                    <Drawer className={classes.drawer}

                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Inicio'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Em alta'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Inscrições'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Biblioteca'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Histórico'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça o login para curtir videos, comentar e se inscrever.
                        </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                    >
                                        Fazer login
                            </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List>
                                <ListSubheader
                                    component='div'
                                    id='nested-list-subheader'
                                    className={classes.subheader}
                                >
                                    O melhor do youtube
                        </ListSubheader>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Musicas'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Esportes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Jogos'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'filmes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Noticias'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Ao vivo'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Destaques'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Videos 360'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }} >
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.ListItemText
                                    }}
                                        primary={'Inscrições'} />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
                <Box p={8}>
                    <Toolbar></Toolbar>
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Rcoendados
                </Typography>
                    <Grid container spacing={4}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            style={{ FontWeight: 600 }}
                                            gutterBottom
                                            variant='body1'
                                            color='textPrimary'
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            display='block'
                                            variant='body2'
                                            color='textSecondary'
                                        >
                                            {item.channel}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='textSecondary'>
                                            {`${item.Views} * ${item.date}`}

                                        </Typography>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}
export default Home;