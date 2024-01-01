import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import VpnLock from "@mui/icons-material/VpnLock";
import Dashboard from "@mui/icons-material/Dashboard";
import AddToDrive from "@mui/icons-material/AddToDrive";
import Bolt from "@mui/icons-material/Bolt";
import FilterList from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover .MuiSvgIcon-root": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarheight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        gap: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        borderBottom: "1px solid white",
        paddingX: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<Dashboard />}
          label="Tuan Le Mern Learning"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLock />}
          label="Public/Private WorkSpace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDrive />}
          label="Add to Google drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDrive />}
          label="Add to Google drive"
          clickable
        />
        <Chip sx={MENU_STYLES} icon={<Bolt />} label="Automation" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterList />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
          variant="outlined"
          startIcon={<PersonAdd />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          gap="10px"
          sx={{
            "&  .MuiAvatar-root": {
              width: 30,
              height: 30,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://bizweb.dktcdn.net/100/438/408/files/avatar-dep-cho-nam-yody-vn10.jpg?v=1683516432549"
            />
          </Tooltip>
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://media.licdn.com/dms/image/D560BAQE96KctT7x-iw/company-logo_200_200/0/1666170056423?e=2147483647&v=beta&t=VWwOyGELKPqLpkj7dbxaCDtWbhWKvp3akvhvMdHivy4"
            />
          </Tooltip>
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8JqJbSvafKBefaSuN1_yrMYpukFdDKMfVwXHyKvHfEP860k4f0h3ZGU0-3h0HYgUB9M&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://bizweb.dktcdn.net/100/438/408/files/avatar-dep-cho-nam-yody-vn10.jpg?v=1683516432549"
            />
          </Tooltip>
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://bizweb.dktcdn.net/100/438/408/files/avatar-dep-cho-nam-yody-vn10.jpg?v=1683516432549"
            />
          </Tooltip>
          <Tooltip title="Tuanle">
            <Avatar
              alt="TuanLe"
              src="https://bizweb.dktcdn.net/100/438/408/files/avatar-dep-cho-nam-yody-vn10.jpg?v=1683516432549"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
