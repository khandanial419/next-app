"use client";
import * as React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import Card from "../components/Cards";
import Modal from "../components/CheckInModal";
import DetailModal from "../components/DetailModal";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [detailModal, setDetailModal] = React.useState(false);
  const handelDetailOpen = () => setDetailModal(true);
  const handleDetailClose = () => setDetailModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fields = [
    { name: "Text Field", type: "text" },
    { name: "Rooms", type: "number" },
    { name: "Number of Guest", type: "number" },
    { name: "Booked Date", type: "date" },
  ];

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          height: "50vh",
          width: "97%",
          backgroundImage: "url('/images/ImagePage.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 2,
          color: "white",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "500px", // Adjust as needed
            gap: 1,
          }}
        >
          <Typography variant="h4">Hi👋 James Doe</Typography>
          <Typography variant="p" sx={{ marginBottom: 2 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            minus.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, width: "150px", borderRadius: 10, padding: 1 }}
            onClick={handleOpen}
          >
            Add Check in
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Center items vertically
          justifyContent: "space-between", // Space between columns
          padding: 2,
          backgroundColor: "# ", // Optional: background color
          borderRadius: 2, // Optional: rounded corners
          fontSize: 20,
          "&:hover": { cursor: "pointer" },
        }}
        // onClick={handleOpen}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Add CheckIns
        </Typography>
        <ListRoundedIcon
          sx={{
            color: "gray",
            transition: "transform 0.2s", // Smooth transition for scaling
          }}
          onClick={handelDetailOpen}
        />
      </Box>
      <Card />
      <Modal open={open} handleClose={handleClose} />
      <DetailModal
        open={detailModal}
        handleClose={handleDetailClose}
        fields={fields}
      />
    </>
  );
};

export default Home;
