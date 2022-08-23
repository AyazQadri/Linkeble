import React from "react";
import "../OrderDetailsMain/OrderDetailsMain.css";
import ClockIcon from "../../images/clockicon.png";
import { useNavigate } from "react-router-dom";

const OrderCard = ({
  OrderImage,
  ProfileImage,
  ProfilerName,
  ProfilerCountry,
  OrderBudget,
  OrderDetails,
  OrderStatus,
  DeliveryTime,
}) => {

  const navigate = useNavigate()

  return (
    <div className="order_card_main" onClick={() => navigate('/orderdetails')}>
      <div className="order_image_div_mainn">
        <img src={OrderImage} alt="image" className="order_image_css" />
      </div>
      <div className="second_order_card_div_main">
        <div className="profile_mainnn">
          <div className="order_profile_image_div">
            <img
              src={ProfileImage}
              alt="img"
              className="Order_profile_image_csss"
            />
          </div>
          <div className="order_name_country_details_div">
            <text
              style={{
                fontSize: "large",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {ProfilerName}
            </text>
            <text
              style={{
                lineHeight: "10px",
                color: "white",
                fontSize: "small",
                paddingBottom: "4px",
              }}
            >
              {ProfilerCountry}
            </text>
            <text style={{ color: "white", fontSize: "small" }}>
              Check Order Details
            </text>
          </div>
        </div>
        <div className="order_budget_main_div">
          <text
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {OrderBudget}
          </text>
          <text style={{ color: "white", lineHeight: "20px" }}>
            {OrderDetails}
          </text>
        </div>
      </div>
      <div className="third_order_card_div_main">
        <div className="status_n_incomplete_main">
          <div className="status_div_">Status</div>
          <div className="InComplete_div_">{OrderStatus}</div>
        </div>
        <div className="Delivery_n_time_divs">
          <div className="delivery_divv_">Dlivery</div>
          <div className="clock_icon_n_time">
            <img src={ClockIcon} alt="icon" className="clock_icon_css" />
            <time dateTime="" className="remaining_days_time">
              {DeliveryTime}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
