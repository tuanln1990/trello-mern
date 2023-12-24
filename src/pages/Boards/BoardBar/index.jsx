import { Box } from "@mui/material";

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.dark",
        height: (theme) => theme.trello.boardBarheight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board bar
    </Box>
  );
}

export default BoardBar;
