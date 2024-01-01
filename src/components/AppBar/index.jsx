import SelectThemeMode from "../SelectThemeMode";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import trelloLogo from "~/assets/trello.svg?react";
import Typography from "@mui/material/Typography";
import WorkSpaces from "./Menus/WorkSpaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAdd from "@mui/icons-material/LibraryAdd";
import Profiles from "./Menus/Profiles";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
      gap={1}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 1 }}>
            <WorkSpaces />
            <Recent />
            <Starred />
            <Templates />
            <Button
              sx={{
                color: "white",
                border: "none",
                "&:hover": { border: "none" },
              }}
              variant="outlined"
              startIcon={<LibraryAdd />}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Close
                  fontSize="small"
                  sx={{
                    color: searchValue !== "" ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSearchValue("")}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <SelectThemeMode sx={{ minWidth: 120 }} />
        <Tooltip title="notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNone sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
