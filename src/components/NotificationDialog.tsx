import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import { FCMType } from "../utils/types";

interface PropsType {
  open: boolean;
  handleClose: () => void;
  notification: FCMType;
}

const NotificationDialog = ({ open, handleClose, notification }: PropsType) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={notification.title}
      aria-describedby={notification.body}
    >
      <DialogTitle>{notification.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{notification.body}</DialogContentText>
        {notification.image && (
          <CardMedia component="img" height="200" image={notification.image} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        {notification.url && (
          <Button
            href={notification.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default NotificationDialog;
