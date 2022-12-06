import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  // Search,
} from "@mui/icons-material";

console.log("---colorModeContext---", colorModeContext, "---colorModeContext---")
const Topbar = () => {
  const theme = useTheme();
  console.log("---theme.palette.mode---", theme.palette.mode, "---theme.palette.mode---")   // current mode
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);
  console.log("---colorMode.toggleColorMode---", colorMode.toggleColorMode, "---colorMode.toggleColorMode---")
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          {/* <searchIcon /> */}
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />   // Dark Mode Icon
          ) : (
            <LightModeOutlined />   // Light Mode Icon
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
