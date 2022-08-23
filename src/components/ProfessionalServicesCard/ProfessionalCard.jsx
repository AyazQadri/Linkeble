import React from "react";
import {
  Card,
  Box,
  Typography,
  CardMedia,
  IconButton,
  CardActions,
  CardContent,
  Avatar,
} from "@material-ui/core";
import logo from "../../images/MachineLearning.png";

const ProfessionalCard = ({data}) => {
  return (
    <div>
      <Card
        style={{
          width: "17rem",
          height: "24rem",
          borderRadius: "8px",
          marginLeft: "2rem",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="body2"
          style={{
            color: "white",
            position: "absolute",
            display: "flex",
            paddingTop: "1rem",
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          {data.subject}
        </Typography>
        <CardMedia component="img" height="100%" image={data.image} alt="image" />
      </Card>
    </div>
  );
};

export default ProfessionalCard;
