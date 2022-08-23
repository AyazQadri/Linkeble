import React from "react";
import "../OrderInformation/OrderInformation.css";
import BuyerNavbar from "../BuyerNavbar/BuyerNavbar";
import OrderCard from "../OrderDetailsMain/OrderCard";
import ProfileImage from "../../images/circularprofile.png";
import orderImageOne from "../../images/one.png";
import orderImageTwo from "../../images/two.png";
import orderImageThree from "../../images/three.png";
import orderImageFour from "../../images/four.png";
import ClockIcon from "../../images/clockicon.png";

const OrderInformation = () => {

  return (
    <div>
      <div>
        <BuyerNavbar />
      </div>
      <div className="order_info_main">
        <div className="order_info_order_card_main">
          <div className="order_info_order_image_div_mainn">
            <img
              src={orderImageOne}
              alt="image"
              className="order_info_order_image_css"
            />
          </div>
          <div className="order_info_second_order_card_div_main">
            <div className="order_info_profile_mainnn">
              <div className="order_info_order_profile_image_div">
                <img
                  src={ProfileImage}
                  alt="img"
                  className="order_info_Order_profile_image_csss"
                />
              </div>
              <div className="order_info_order_name_country_details_div">
                <text
                  style={{
                    fontSize: "large",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Johnathen
                </text>
                <text
                  style={{
                    lineHeight: "10px",
                    color: "white",
                    fontSize: "small",
                    paddingBottom: "4px",
                  }}
                >
                  USA
                </text>
                <text style={{ color: "white", fontSize: "small" }}>
                  Check Order Details
                </text>
              </div>
            </div>
            <div className="order_info_order_budget_main_div">
              <text
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                $700
              </text>
              <text style={{ color: "white", lineHeight: "20px" }}>
                Develop Professional Mobile Apps for Android & iOS
              </text>
            </div>
          </div>
          <div className="order_info_third_order_card_div_main">
            <div className="order_info_status_n_incomplete_main">
              <div className="order_info_status_div_">Status</div>
              {/* <div className="order_info_InComplete_div_">InComplete</div>  for other order Status */}
              <div className="order_completed_className">Completed</div>
            </div>
            <div className="order_info_Delivery_n_time_divs">
              <div className="order_info_delivery_divv_">Dlivery</div>
              <div className="order_info_clock_icon_n_time">
                <img
                  src={ClockIcon}
                  alt="icon"
                  className="order_info_clock_icon_css"
                />
                <time dateTime="" className="order_info_remaining_days_time">
                  5day, 11hr, 44min
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
