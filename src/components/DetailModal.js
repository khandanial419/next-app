// components/DetailModal.js
import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DetailModal = ({ open, handleClose, fields }) => {
  return (
    <Modal open={open} onClose={handleClose}>
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
          borderRadius: 5,
          overflowY: "auto", // Allow scrolling if content exceeds height
        }}
      >
        {/* Header */}
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: 500, color: "black" }}
            >
              Detail
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "black" }} />
            </IconButton>
          </Grid>
        </Grid>

        {/* Body */}
        <Grid container spacing={2} sx={{ mt: 2, padding: 2 }}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {fields.map((field, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Grid item xs={5}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "black",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 1,
                        }}
                      >
                        {field.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        fullWidth
                        type={field.type}
                        sx={{
                          width:
                            field.type === "text" || field.type === "date"
                              ? 150
                              : 70,
                        }}
                      />
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <img
              src="/images/ImagePage.jpg" // Replace with your image URL
              alt="Description"
              style={{ width: "100%", height: "70%", borderRadius: 10 }}
            />
          </Grid>
        </Grid>

        {/* Footer */}
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ marginRight: 1, border: "none", color: "black" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ borderRadius: 5 }}
          >
            OK
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DetailModal;
