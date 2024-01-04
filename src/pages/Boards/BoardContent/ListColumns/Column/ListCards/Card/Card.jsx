import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Group from "@mui/icons-material/Group";
import Attachment from "@mui/icons-material/Attachment";
import Commnet from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card as MuiCard } from "@mui/material";

function Card({ temporaryHiddenMeida }) {
  if (temporaryHiddenMeida)
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: "unset",
        }}
      >
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>Card</Typography>
        </CardContent>
      </MuiCard>
    );
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KaNKX9VVLyQC_fLySDmfSxBqJiBbf0qHeA&usqp=CAU"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>TuanLe Learning</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<Group />}>
          20
        </Button>
        <Button size="small" startIcon={<Commnet />}>
          15
        </Button>
        <Button size="small" startIcon={<Attachment />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

Card.propTypes = { temporaryHiddenMeida: "bool" };
export default Card;
