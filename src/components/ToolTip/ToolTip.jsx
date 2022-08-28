import React from "react";
import "../ToolTip/ToolTip.css";
import { Box, Typography } from "@mui/material";
import ClockIcon from "../../images/clockicon.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Picture from "../../images/profilepic.png";
import clockIcon from "../../images/tooltipclock.png";
import Picture1 from "../../images/tabprofileimg1.png";
import Picture2 from "../../images/tabprofileimg2.png";
import Picture3 from "../../images/tabprofileimg3.png";
import Picture4 from "../../images/circularprofile.png";

const ToolTip = () => {
  const TooltipData = [
    {
      image: Picture,
      text: "New Message from Nutella",
      time: "2 minutes ago",
    },
    {
      image: Picture1,
      text: "Alexa Liras Deliver order",
      time: "23 hours ago",
    },
    {
      image: Picture2,
      text: "Laurent Perrier accepted order",
      time: "5 days ago",
    },
    {
      image: Picture3,
      text: "New Message from Michael Levi",
      time: "1 weeks ago",
    },
    // {
    //   image: Picture4,
    //   text: "New Message from Nutella",
    //   time: "2minutes ago",
    // },
    // {
    //   image: Picture2,
    //   text: "New Message from Nutella",
    //   time: "2minutes ago",
    // },
  ];

  return (
    <div>
      <Box
        sx={{
          // content: "",
          position: "absolute",
          zIndex: 10,
          right: 225,
          top: 80,
          // left: "80%",
          background: "#F6F6F6",
          width: "2rem",
          height: "2rem",
          // width: "12px",
          // height: "12px",
          transform: "translateY(-50%) rotate(45deg)",
          // marginTop: "-23px",
          // borderTeft: "1px solid #E1E1E1",
          // borderTop: "1px solid #E1E1E1",
          // zIndex: 5,
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          padding: "2rem 3rem",
          color: "black",
          width: "20%",
          maxHeight: "50%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          alignContent: "center",
          borderRadius: "15px",
          position: "absolute",
          overflowY: "auto",
          top: 70,
          right: 125,
        }}
      >
        {TooltipData.map((item) => {
          return (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="img"
                  src={item.image}
                  sx={{ width: 56, height: 56 }}
                />
              </Stack>
              <Box
                style={{
                  displa: "flex",
                  flexDirection: "column",
                  paddingLeft: "15px",
                }}
              >
                <Box style={{ paddingBottom: "5px" }}>{item.text}</Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "2px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      height: ".9rem",
                      width: ".9rem",
                      borderRadius: "50%",
                      color: "darkgrey",
                    }}
                  >
                    <img
                      src={clockIcon}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Box>
                  <Box style={{ color: "grey", paddingLeft: "10px" }}>
                    {item.time}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default ToolTip;
