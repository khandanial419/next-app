import * as React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";

const CheckInModal = ({ open, handleClose }) => {
  const [file, setFile] = React.useState(null);
  const [dragOver, setDragOver] = React.useState(false);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const closeModal = () => {
    setFile(null); // Clear the file when closing the modal
    handleClose(); // Close the modal
  };
  return (
    <Modal
      open={open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "700px" }, // Responsive width
            maxHeight: "90vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            overflowY: "auto", // Allow scrolling if content exceeds height
          }}
        >
          {/* First Row: Title and Close Icon */}
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Add CheckIn
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={closeModal} sx={{ color: "black" }}>
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>

          {/* Second Row: Title Label */}
          <Typography sx={{ mt: 2, fontWeight: "bold" }}>Title</Typography>

          {/* Third Row: Input Box */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter title"
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1px solid gray",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid gray",
                },
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />

          {/* Fourth Row: Upload Image Label */}
          <Typography sx={{ mt: 2, fontWeight: "bold" }}>
            Upload Image
          </Typography>

          {/* Fifth Row: Upload Area */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              borderRadius: 2,
              mt: 1,
              width: "100%",
              cursor: "pointer",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload").click()}
          >
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <OutboxOutlinedIcon sx={{ fontSize: "100px" }} />
            <Typography sx={{ mt: 2, fontSize: 15, fontWeight: "bold" }}>
              Click or Drag file to this area to upload
            </Typography>
            <Typography
              sx={{
                mt: 0,
                color: "gray",
                alignItems: "center",
                width: 280,
                fontSize: 12,
                textAlign: "center",
              }}
            >
              Support for a single or bulk upload. Strictly prohibit Lorem ipsum
              dolor sit amet.
            </Typography>
          </Box>

          {/* Display the uploaded file name */}
          {file && (
            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Uploaded File: {file.name}
            </Typography>
          )}

          {/* Last Row: Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant="outlined"
              sx={{ marginRight: 1, border: "none", color: "black" }}
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 5 }}
              onClick={() => {
                // Handle upload logic
                console.log(file);
                closeModal();
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CheckInModal;
