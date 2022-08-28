import React from "react";
import "../PreferencesResult/PreferencesResult.css";
import BuyerNavbar from "../BuyerNavbar/BuyerNavbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import ShareIcon from "../../images/shareicon.png";
import DeleteIcon from "../../images/deleteicon.png";
import EditIcon from "../../images/editicon.png";
import AppImageOne from "../../images/appimageone.png";
import AppImageTwo from "../../images/six.png";
import StarIcon from "@material-ui/icons/Star";
import { FavoriteBorder } from "@material-ui/icons";
import Rating from "@mui/material/Rating";
import SuggestedServices from "../SuggestedServices/SuggestedServices";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import ten from "../../images/ten.png";
import eleven from "../../images/eleven.png";
import twelve from "../../images/twelve.png";
import thirteen from "../../images/thirteen.png";
import fourteen from "../../images/fourteen.png";
import fifteen from "../../images/fifteen.png";
import IconButton from "@mui/material/IconButton";
import BuyerFooter from "../BuyerFooter/BuyerFooter";

const PreferencesResult = () => {
  const Services = [
    {
      subject: "expert mixing and mastering engineer",
      image: six,
    },
    {
      subject: "engaging article or blog post",
      image: seven,
    },
    {
      subject: "SEO and ranking your Sites/Channel",
      image: eight,
    },
    {
      subject: "create original business poster for digital marketing",
      image: nine,
    },
    {
      subject: "trumpet section to ensure your song is a hit",
      image: ten,
    },
    {
      subject: "Programming in python",
      image: eleven,
    },
    {
      subject: "Proofread and Editing website",
      image: twelve,
    },
    {
      subject: "Pro Logo Designing",
      image: thirteen,
    },
    {
      subject: "Microcontroller Programming ",
      image: fourteen,
    },
    {
      subject: "WordPress Bug Fixer and Developer",
      image: fifteen,
    },
  ];

  const AddedList = [
    {
      title: "expert mixing and mastering engineer",
      budget: "From $10",
      image: AppImageTwo,
    },
    {
      title: "engaging article or blog post",
      budget: "From $20",
      image: AppImageOne,
    },
  ];

  return (
    <div>
      <div>
        <BuyerNavbar />
      </div>
      <div>
        <GuestOptions />
      </div>
      <div className="result_preferences_main">
        <div className="result_my_fvrt_main_div">My Favorites</div>
        <p className="result_fvrts_details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
          justo, scelerisque et euismod sit amet, eleifend quis magna.
          scelerisque et euismod sit amet, eleifend quis magna scelerisque et
          euismod sit amet.
        </p>
        <div className="App_development_row_main">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="app_development_text">App development</div>
            <div className="modifiying_icons_main">
              <div className="icon_div_for_all_icons">
                <img
                  src={ShareIcon}
                  alt="icon"
                  className="icon_css_for_all_icons"
                />
              </div>
              <div className="icon_div_for_all_icons">
                <img
                  src={DeleteIcon}
                  alt="icon"
                  className="icon_css_for_all_icons"
                />
              </div>
              <div className="icon_div_for_all_icons">
                <img
                  src={EditIcon}
                  alt="icon"
                  className="icon_css_for_all_icons"
                />
              </div>
            </div>
          </div>
          <div className="added_list_card_full_main">
            {AddedList.map((item) => {
              return (
                <div className="added_list_card_main">
                  <div className="add_list_card_title">{item.title}</div>
                  <div className="add_list_rating_start_with_save_icon_main">
                    <div className="add_list_card_rating_div">
                      <StarIcon style={{ color: "gold", fontSize: "large" }} />
                      <StarIcon style={{ color: "gold", fontSize: "large" }} />
                      <StarIcon style={{ color: "gold", fontSize: "large" }} />
                      <StarIcon style={{ color: "gold", fontSize: "large" }} />
                      <StarIcon style={{ color: "gold", fontSize: "large" }} />
                      <div
                        style={{
                          fontSize: "small",
                          display: "flex",
                          paddinleft: "5px",
                          alignSelf: "center",
                          color: "white",
                        }}
                      >
                        {"5(11)"}
                      </div>
                    </div>
                    <div className="fvrt_icon_csss">
                      <IconButton
                        aria-label="add to favorites"
                        style={{ cursor: "pointer", marginTop: "-8px" }}
                      >
                        <FavoriteBorder />
                      </IconButton>
                    </div>
                  </div>
                  <div className="App_devlop_budget_name">{item.budget}</div>
                  <div className="app_image_div">
                    <img src={item.image} alt="img" className="App_image_css" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <SuggestedServices
            title={"Talents You might also like;"}
            data={Services}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <BuyerFooter />
        </div>
      </div>
    </div>
  );
};

export default PreferencesResult;
