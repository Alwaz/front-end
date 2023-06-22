import { alpha, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFF",
      black: "#292929",
    },
  },
  shape: {
    borderRadius: 2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#000", // Customize the background color if needed
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
        input: {
          padding: "8px 8px 8px 0",
          paddingLeft: "calc(1em + 32px)",
          transition: "width 200ms",
          width: "100%",
          "@media (min-width:600px)": {
            width: "20ch",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& $notchedOutline": {
            borderColor: alpha("#fff", 0.5),
          },
          "&:hover $notchedOutline": {
            borderColor: alpha("#fff", 0.7),
          },
          "&$focused $notchedOutline": {
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
      },
    },
  },
});
