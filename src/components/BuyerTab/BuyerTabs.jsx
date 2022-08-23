import React, { useState } from "react";
import "../BuyerTab/BuyerTabs.css";
import { Box, Tabs, Tab, Typography, useTheme, AppBar } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import TabCard from "./TabCard";
import TabCardImage1 from "../../images/tabcardimg1.png";
import TabCardImage2 from "../../images/tabcardimg2.png";
import TabCardImage3 from "../../images/tabcardimg3.png";
import TabProfileImage1 from "../../images/tabprofileimg1.png";
import TabProfileImage2 from "../../images/tabprofileimg2.png";
import TabProfileImage3 from "../../images/tabprofileimg3.png";
import LinkedJobPopup from "../LinkedJobPopup/LinkedJobPopup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const BuyerTabs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showLinkedPopup, setShowLinkedPopup] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const TabCardData = [
    {
      image: TabCardImage1,
      profileImage: TabProfileImage1,
      profileName: "Julia Abbot",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage3,
      profileImage: TabProfileImage3,
      profileName: "Abigail",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
  ];

  return (
    <div
      style={{
        marginLeft: "6rem",
        marginTop: "2rem",
        maxWidth: "100%",
        marginRight: "4rem",
      }}
    >
      <Box>
        <LinkedJobPopup
          showPopup={showLinkedPopup}
          hidePopup={() => setShowLinkedPopup(false)}
          title={'Link Active Orders'}
          heading={'Create & Link multiple Jobs for easily and quick accessibility'}
          FirstInputLabel={'Link Name'}
          SecondInputLabel={'Details'}
          opt={'(opt)'}
          SubmitBtn={'Link Jobs'}
          CancelBtn={'Cancel'}
        />
      </Box>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#00966B",
          maxHeight: "30rem",
          overflowY: "scroll",
          // overflowY: 'hidden'
        }}
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: "#F2F2F2",
            display: "flex",
            flexDirection: "row",
            
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="prximary"
            textColor="inherit"
            // variant="fullWidth"
            aria-label="full width tabs example"
            hidden={false}
            visibleScrollbar={false}
            variant="scrollable"
            scrollButtons="auto"
            scrollbarWidth={false}
            sx={{
              "& button.Mui-selected": { backgroundColor: "#00966B" },
            }}
          >
            <Tab
              label="Active Orders"
              {...a11yProps(0)}
              sx={{
                color: "black",
                borderTopRightRadius: "15px",
                width: "10rem",
              }}
            />
            <Tab
              label="Late"
              {...a11yProps(1)}
              sx={{
                color: "black",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                width: "10rem",
              }}
            />
            <Tab
              label="Delivered"
              {...a11yProps(2)}
              sx={{
                color: "black",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                width: "10rem",
              }}
            />
            <Tab
              label="Completed"
              {...a11yProps(3)}
              sx={{
                color: "black",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                width: "10rem",
              }}
            />
            <Tab
              label="Linked"
              {...a11yProps(4)}
              sx={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                color: "black",
                width: "10rem",
              }}
            />
            <Tab
              label="Cancelled"
              {...a11yProps(5)}
              sx={{
                color: "black",
                borderTopLeftRadius: "15px",
                width: "10rem",
              }}
            />
          </Tabs>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              color: "#00966B",
              backgroundColor: "#FFFFFF",
              marginLeft: "17rem",
              height: "30px",
              width: "8rem",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => setShowLinkedPopup(true)}
          >
            Link Jobs
          </Box>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {TabCardData.map((item) => {
              console.log(item, "asdasdasdasd");
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item?.orderNumber}
                />
              );
            })}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
};

export default BuyerTabs;
