import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  CardMedia,
  Avatar,
  Box,
  Typography,
  Input,
} from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import CrossIcon from "../../images/cross3.png";
import { TextareaAutosize } from "@mui/material";
import "../LinkedJobPopup/LinkedJobPopup.css";

const LinkedJobPopup = ({ showPopup, hidePopup, title, heading, FirstInputLabel,SecondInputLabel ,opt , SubmitBtn, CancelBtn}) => {
  return (
    <div>
      <Dialog open={showPopup} PaperProps={{ style: { borderRadius: 30 } }}>
        <Box
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={CrossIcon}
            style={{ width: "20px", cursor: "pointer" }}
            onClick={() => hidePopup()}
          />
        </Box>
        <Box style={{ padding: "0px 20px 0px 20px" }}>
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2rem",
              fontSize: "1.4rem",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </DialogTitle>
          <DialogContent>
            <Box
              style={{
                color: "black",
                fontSize: "1.2rem",
                color: "black",
                fontFamily: "Roboto",
              }}
            >
              {heading}
              {/* <br />
              accessibility */}
            </Box>
          </DialogContent>
          <DialogContent>
            <Box
              style={{
                paddingBottom: "10px",
                fontSize: "1.2rem",
                fontFamily: "Roboto",
              }}
            >
              {FirstInputLabel}
            </Box>
            <input
              style={{
                width: "30vw",
                borderRadius: "40px",
                paddingLeft: "20px",
                border: ".2px solid lightgrey",
                outline: "none",
                minHeight: "7vh",
                fontSize: "1rem",
                color: "grey",
                fontFamily: "Roboto",
              }}
              className="input_placeholder"
              maxLength="50"
              placeholder="Add, App development"
            />
            <Box
              style={{
                paddingBottom: "10px",
                paddingTop: "10px",
                fontSize: "1.2rem",
                color: "black",
                fontFamily: "Roboto",
              }}
            >
              {SecondInputLabel}
              <span
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: "1.2rem",
                }}
              >
              {opt}
              </span>
            </Box>
            <textarea
              style={{
                width: "29vw",
                minHeight: "12vh",
                borderRadius: "20px",
                padding: "1rem",
                resize: "none",
                outline: "none",
                border: ".2px solid lightgrey",
                color: "grey",
                fontSize: "1rem",
                fontFamily: "Roboto",
              }}
              className="input_placeholder"
              maxLength="300"
              placeholder="Details, for your list..."
            />
          </DialogContent>
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: "10vw",
              // justifyContent: "space-between",
              paddingLeft: "30px",
              marginBottom: "1.5rem",
            }}
          >
            <Box
              style={{
                padding: "10px 35px 10px 35px",
                backgroundColor: "#00966B",
                color: "white",
                borderRadius: "22px",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Roboto",
                flexWrap: "wrap",
              }}
            >
              {SubmitBtn}
            </Box>
            <Box
              style={{
                backgroundColor: "#F6F6F6",
                padding: "10px 50px 10px 50px",
                borderRadius: "22px",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Roboto",
                marginLeft: "1rem",
              }}
              onClick={() => hidePopup()}
            >
              {CancelBtn}
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default LinkedJobPopup;
