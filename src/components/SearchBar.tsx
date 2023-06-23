import React from 'react'
import { Box, InputBase, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

const SearchBar = () => {
    const { palette, shape } = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            borderRadius: shape.borderRadius,
            marginLeft: 5,
            bgcolor: alpha(palette.common.white, 0.15), '&:hover': {
                backgroundColor: alpha(palette.common.white, 0.25),
            },
        }}>
            <Box
                display={'flex'}
                alignItems={'center'}
                paddingX={2}
                borderRight={1}
                borderColor={'gray'}
            >
                <Search />
            </Box>

            <InputBase
                placeholder="Search blogs..."
                fullWidth
            />
        </Box>
    )
}

export default SearchBar;
