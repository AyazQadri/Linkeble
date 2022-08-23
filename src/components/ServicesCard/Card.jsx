import React, {useState } from "react";
import {
  Card,
  Box,
  Typography,
  CardMedia,
  IconButton,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import "../ServicesCard/ServicesCard.css";
import logo from "../../images/download.png";
import StarIcon from "@material-ui/icons/Star";

const CardServices = ({ data }) => {

  const [show, setShow] = useState();


  const callBack = () => {

  }

  return (
    <div>
      <Card
        style={{
          width: "17rem",
          height: "24rem",
          borderRadius: "8px",
          marginLeft: "2rem",
          marginTop: '2rem'
        }}
      >
        <Box
          style={{
            backgroundColor: "#00966B",
            height: "12rem",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              variant="body2"
              style={{ color: "white", fontSize: "1rem" }}
            >
              {data.subject}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div style={{ display: "flex" }}>
              <div>
                <StarIcon style={{ color: "gold", fontSize: "large" }} />
                <StarIcon style={{ color: "gold", fontSize: "large" }} />
                <StarIcon style={{ color: "gold", fontSize: "large" }} />
                <StarIcon style={{ color: "gold", fontSize: "large" }} />
                <StarIcon style={{ color: "gold", fontSize: "large" }} />
              </div>
              <div style={{ fontSize: "small", display: 'flex',  alignSelf: 'center' }}>
                {"5(11)"}
              </div>
            </div>
            <IconButton
              aria-label="add to favorites"
              style={{ marginLeft: "5.5rem" }}
            >
              <FavoriteBorder />
            </IconButton>
          </CardActions>
          <CardActions>
            <Typography
              style={{
                color: "white",
                fontSize: "1.3rem",
                verticalAlign: "bottom",
                display: "flex",
              }}
            >
              From $10
            </Typography>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          height="230"
          image={data.image}
          alt="Paella dish"
        />
      </Card>
    </div>
  );
};

export default CardServices;
