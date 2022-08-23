import React from "react";
import "../Footer/Footer.css";
import { Box, Typography, CardMedia } from "@mui/material";

const FooterCard = ({ data }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '17%',
        textAlign: 'center',
        margin: '1em'
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
          height: "20%",
          width: "auto",
        }}
      >
        <img
          src={data.image}
          alt="image"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Typography
        style={{
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.title}
      </Typography>
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Typography
          variant="body2"
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "1rem",
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterCard;
