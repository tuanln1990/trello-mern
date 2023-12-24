import SelectThemeMode from "../SelectThemeMode";
import { Box } from "@mui/material";

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.light",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <SelectThemeMode />
    </Box>
  );
}

export default AppBar;
