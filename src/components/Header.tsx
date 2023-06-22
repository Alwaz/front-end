import { AppBar, Box, InputBase, Toolbar, Typography, useTheme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { Search } from '@mui/icons-material';


const Header: React.FC = () => {

    // const { common } = useTheme().palette;
    const { palette, shape, breakpoints } = useTheme()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ bgcolor: palette.common.white, boxShadow: 1 }}  >
                <Toolbar>
                    <Typography
                        variant="h5"
                        color={palette.common.black}
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Blogify
                    </Typography>
                    <Box sx={{
                        position: 'relative',
                        borderRadius: shape.borderRadius,
                        marginLeft: 5,
                        bgcolor: alpha(palette.common.black, 0.15), '&:hover': {
                            backgroundColor: alpha(palette.common.black, 0.25),
                        },
                        // width:{{}}
                    }}>
                        <InputBase
                            placeholder="Search blogs"
                            startAdornment={<Search />}
                            sx={{ width: { sm: 'auto' } }}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));

export default Header;
