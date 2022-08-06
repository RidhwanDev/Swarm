import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          border: "0px solid transparent",
          boxShadow: "1px 0px #1c1c1d",
          backgroundColor: "#ffcc01",
          color: "#111",
          fontSize: "1rem",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          ":hover": {
            cursor: "pointer",
          },
        },
      },
    },
  },
});
