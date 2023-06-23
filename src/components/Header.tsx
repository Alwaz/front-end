import { AppBar, Avatar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';

import EditIcon from '@mui/icons-material/Edit';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MoreIcon from '@mui/icons-material/MoreVert';



const Header: React.FC = () => {
    const [clickMoreIcon, setClickMoreIcon] =
        React.useState<null | HTMLElement>(null);


    const { palette } = useTheme()

    const isMobileMenuOpen = Boolean(clickMoreIcon);



    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setClickMoreIcon(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setClickMoreIcon(null);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={clickMoreIcon}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            // id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

        </Menu>
    )



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ bgcolor: palette.common.black, boxShadow: 1 }}  >
                <Toolbar>
                    <Typography
                        variant="h5"
                        color={palette.common.white}
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Blogify
                    </Typography>
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    {/* Desktop MenuBar */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Button variant='outlined' color='inherit' startIcon={<EditIcon />} >Write</Button>
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <BookmarksIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"

                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar alt="User name" src={'src/assets/avatar.jpeg'} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            // aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
}

export default Header;
