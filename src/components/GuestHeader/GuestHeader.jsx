import React,  { useState }  from "react";
import "../GuestHeader/GuestHeader.css";
import logo from "../../images/logo.png";
import dollar from "../../images/dollar.png";
import globe from "../../images/globe.png";
import JoinNowPopUp from "../JoinNowPopUp/JoinNowPopUp";
import styled from "styled-components";
import HamburgerMenuIcon from '../../images/hamburger.png'

const GuestHeader = (props) => {

  const [menuToggle, setMenuToggle] = useState(false)

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle)
  }


  return (
    <div className="main_div">
      <div className="sub_main_one">
        <div className="logo_div">
          <img src={logo} alt="logo" className="logo_css" />
        </div>
      </div>
      <div className="sub_main_two">
        <div className="header_buttons">{props.BecomeTalentOption}</div>
        <div className="header_buttons">{props.SignInOption}</div>
        <div className="join_main_button" onClick={() => props.JoinPopUp()}>{props.JoinNowOption}</div>
        <div className="English_Dollar_button_main">
          <img
            src={globe}
            alt="globe"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
          <p style={{ paddingLeft: "10px" }}>{props.EnglishOption}</p>
        </div>
        <div className="English_Dollar_button_main">
          <img
            src={dollar}
            alt="dollar"
            style={{ height: "1.2rem", width: "1rem" }}
          />

          <p style={{ paddingLeft: "7px" }}>{props.USDOption}</p>
        </div>
      </div>
       <div className="menu_icon_main" onClick={handleMenuToggle}>
      <img src={HamburgerMenuIcon} alt="menu icon" className="icon_Css" />
      </div>
     { menuToggle && <div className="dropdown_menu_main">
        <div className="menu_logo_div">
          <img src={logo} alt='logo' className="menu_logo" />
        </div>
        <div className="menu_first_heading_css" >
          {props.BecomeTalentOption}
        </div>
        <div className="menu_second_heading_css">
        {props.SignInOption}
        </div>
        <div className="menu_third_heading_css">
        {props.JoinInOption}
        </div>
        <div className="menu_fourth_heading_css">
          <p>{props.EnglishOption}</p>
        </div>
        <div className="menu_fifth_heading_css">
          <p>{props.USDOption}</p>
        </div>
      </div> 
      }
    </div>
  );
};

export default GuestHeader;
