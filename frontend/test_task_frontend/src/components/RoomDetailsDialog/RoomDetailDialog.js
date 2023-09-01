import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Room from "../Cards/Room/Room";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RoomDetailsDialog = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState(null);
  const [name, setName] = React.useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  React.useImperativeHandle(ref, () => ({
    setOpen(visible) {
      setIsOpen(visible);
    },
    setContent(content) {
      setContent(content);
    },
    setName(name) {
      setName(name);
    },
  }));
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Room " + name + " details"}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
});

export default RoomDetailsDialog;
