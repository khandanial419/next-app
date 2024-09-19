import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "CheckIn Name",
      description: "12th Nov, 2022",
      userName: "John Doe",
      userImage: "/images/user.png", // Change to your image path
    },
    {
      id: 2,
      title: "CheckIn Name",
      description: "12th Nov, 2022",
      userName: "John Doe",
      userImage: "/images/user.png",
    },
    {
      id: 3,
      title: "CheckIn Name",
      description: "12th Nov, 2022",
      userName: "John Doe",
      userImage: "/images/user.png",
    },
    {
      id: 4,
      title: "CheckIn Name",
      description: "12th Nov, 2022",
      userName: "John Doe",
      userImage: "/images/user.png",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {cardsData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card
            sx={{
              position: "relative",
              height: "100%",
              backgroundColor: "white",
              boxShadow: 3,
              padding: 1.5,
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                height: 140,
                backgroundImage: `url('/images/ImagePage.jpg')`, // Change to your background image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 5,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                  width: "100px",
                  borderRadius: 10,
                  position: "absolute",
                  top: 5,

                  right: 20,
                  fontSize: 10,
                }}
              >
                Checked in
              </Button>
            </Box>
            <CardContent sx={{ marginLeft: -2 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: 15, color: "black", fontWeight: "bold" }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                <img
                  src={card.userImage}
                  alt={card.userName}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    marginRight: 8,
                  }}
                />
                <Typography variant="body2">Owner: {card.userName}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
