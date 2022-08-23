import React from 'react';
import '../ToolTip/ToolTip.css';
import { Box, Typography } from '@mui/material';
import ClockIcon from '../../images/clockicon.png';

const ToolTip = () => {
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          position: "absolute",
          top: 70,
          right: 125,
        }}
      >
        <Box>
            <Box>
                Profile Pic
            </Box>
            <Box>
                <Box>
                    New Message <Box>from Nutella</Box>
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ToolTip