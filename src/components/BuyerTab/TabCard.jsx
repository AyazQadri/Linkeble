import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardContentText,
  CardMedia,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const TabCard = ({
  Image,
  ProfileImage,
  ProfileName,
  OrderBudget,
  OrderStatus,
  OrderDate,
  OrderNumber,
}) => {

  const navigate = useNavigate();


  return (
    <div>
      <Card
        sx={{
          // width: '100%',
          maxWidth: "100%",
          backgroundColor: "#F2F2F2",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
        <Box>
          <CardActions style={{ paddingRight: '20px' }}>
            <CardMedia
              component="img"
              height="100"
              image={Image}
              alt="Order Image"
              sx={{ width: '10vw', borderRadius: "10px" }}
            />
          </CardActions>
        </Box>
        <Box
          style={{
            width: "20vw",
            // backgroundColor: "yellow",
            paddingLeft: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardActions>
            <Avatar>
              <img
                src={ProfileImage}
                alt="img"
                style={{ objectFit: "cover" }}
              />
            </Avatar>
            <Typography style={{ paddingLeft: "1rem", fontSize: '1vw' }}>
              {ProfileName}
            </Typography>
          </CardActions>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "coral",
            // paddingLeft: '10%',
            width: "15vw",
          }}
        >
          <CardContent>
            <Typography style={{ paddingBottom: ".5rem" }}>Budget</Typography>
            <Typography
              style={{ color: "black", fontWeight: "700", paddingLeft: "5px" }}
            >
              {OrderBudget}
            </Typography>
          </CardContent>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "yellowgreen",
            // paddingLeft: '10%',
            width: "15vw",
          }}
        >
          <CardContent>
            <Typography style={{ paddingBottom: ".5rem" }}>Status</Typography>
            <Typography style={{ fontWeight: 700, color: "#37AFFF" }}>
              {OrderStatus}
            </Typography>
          </CardContent>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "cornflowerblue",
            // paddingLeft: '10%',
            width: "15vw",
          }}
        >
          <CardContent>
            <Typography style={{ paddingBottom: ".5rem" }}>Date</Typography>
            <Typography style={{ fontWeight: 700, color: "black" }}>
              {OrderDate}
            </Typography>
          </CardContent>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "coral",
          }}
        >
          <Box
            style={{
              backgroundColor: "#FFFFFF",
              fontSize: "small",
              position: "absolute",
              right: 30,
              borderTopRightRadius: "10px",
              height: "20px",
            }}
          >
            {OrderNumber}
          </Box>
        </Box>
        <Box
          style={{
            width: '30%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "2rem",
            // backgroundColor: "coral",
          }}
        >
          <Box
            onClick={() => navigate('/orderdetails')}
            style={{
              width: "8rem",
              backgroundColor: "#00966B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              color: "white",
              height: "1.5rem",
              cursor: "pointer",
            }}
          >
            View Order
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default TabCard;
