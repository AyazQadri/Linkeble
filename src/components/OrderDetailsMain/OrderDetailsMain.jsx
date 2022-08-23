import React from "react";
import "../OrderDetailsMain/OrderDetailsMain.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Input } from "reactstrap";
import BuyerNavbar from "../BuyerNavbar/BuyerNavbar";
import ProfileImage from "../../images/circularprofile.png";
import VerifiedIcon from "../../images/verifiedicon.png";
import LocationIcon from "../../images/locationicon.png";
import PlusIcon from "../../images/plusicon.png";
import orderImageOne from "../../images/one.png";
import orderImageTwo from "../../images/two.png";
import orderImageThree from "../../images/three.png";
import orderImageFour from "../../images/four.png";
import ClockIcon from '../../images/clockicon.png';
import OrderCard from "./OrderCard";
import { useNavigate } from 'react-router-dom';

const OrderDetailsMain = () => {

  const navigate = useNavigate();
  const percentage = 90;

  const orderCardData = [
    {
      OrderImage: orderImageOne,
      ProfileImage: ProfileImage,
      ProfilerName: 'Johnathen', 
      ProfilerCountry: 'USA',
      OrderBudget: '$700',
      OrderDetails: 'Develop Professional Mobile Apps for Android & iOS',
      OrderStatus: 'InComplete',
      DeliveryTime: '5day, 11hr, 44min'
    },
    {
      OrderImage: orderImageTwo,
      ProfileImage: ProfileImage,
      ProfilerName: 'Johnathen', 
      ProfilerCountry: 'USA',
      OrderBudget: '$300',
      OrderDetails: 'UI/UX Design & Prototyping',
      OrderStatus: 'InComplete',
      DeliveryTime: '8day, 15hr, 24min'
    },
    {
      OrderImage: orderImageThree,
      ProfileImage: ProfileImage,
      ProfilerName: 'Johnathen', 
      ProfilerCountry: 'USA',
      OrderBudget: '$300',
      OrderDetails: 'Develop Professional Mobile Apps for Android & iOS',
      OrderStatus: 'InComplete',
      DeliveryTime: '11day, 09hr, 23min'
    },
    {
      OrderImage: orderImageFour,
      ProfileImage: ProfileImage,
      ProfilerName: 'Johnathen', 
      ProfilerCountry: 'USA',
      OrderBudget: '$500',
      OrderDetails: 'Develop Professional We Application',
      OrderStatus: 'InComplete',
      DeliveryTime: '5day, 11hr, 44min'
    },
    {
      OrderImage: orderImageOne,
      ProfileImage: ProfileImage,
      ProfilerName: 'Johnathen', 
      ProfilerCountry: 'USA',
      OrderBudget: '$100',
      OrderDetails: 'UI/UX Design & Prototyping',
      OrderStatus: 'InComplete',
      DeliveryTime: '2day, 21hr, 14min'
    },
  ]

  return (
    <div>
      <div>
        <BuyerNavbar />
      </div>
      <div className="order_details_main_page_div">
        <div className="first_order_details_main">
          <div className="order_page_profile_pic_div">
            <img
              src={ProfileImage}
              alt="img"
              className="Circular_profile_img_css"
            />
          </div>
          <div className="profile_name_main_div">
            <text className="profile_name_text_css">Emma Julia</text>
            <span className="profile_level_css">(level 2)</span>
            <img src={VerifiedIcon} alt="icon" className="verified_icon_css" />
          </div>
          <div className="status_div">Client satisfaction is my main moto</div>
          <div className="profiler_location_div">
            <img src={LocationIcon} alt="img" className="location_icon_css" />
            <text className="country_name_css">New York United States</text>
          </div>
          <div className="avg_response_rate_div">
            <div className="avg_response_rate_text_n_mins_div_main">
              <text
                style={{
                  paddingBottom: "10px",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                Ave. Response Rate
              </text>
              <text style={{ fontFamily: "Roboto" }}>30 minutes</text>
            </div>
            <div className="circular_progress_bar_div">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  // rotation: 0.25,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  // strokeLinecap: "butt",
                  // Text size
                  textSize: "1.7rem",
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',
                  // Colors
                  pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                  textColor: "black",
                  trailColor: "white",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="avg_response_rate_div">
            <div className="avg_response_rate_text_n_mins_div_main">
              <text
                style={{
                  paddingBottom: "10px",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                Order Compilation
              </text>
              <text style={{ fontFamily: "Roboto" }}>{"24 orders"}</text>
            </div>
            <div className="circular_progress_bar_div">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textSize: "1.7rem",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                  textColor: "black",
                  trailColor: "white",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="avg_response_rate_div">
            <div className="avg_response_rate_text_n_mins_div_main">
              <text
                style={{
                  paddingBottom: "10px",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                On-Time Delivery
              </text>
              <text style={{ fontFamily: "Roboto" }}>
                23 Orders Delivered on time
              </text>
            </div>
            <div className="circular_progress_bar_div">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textSize: "1.7rem",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                  textColor: "black",
                  trailColor: "white",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="avg_response_rate_div">
            <div className="avg_response_rate_text_n_mins_div_main">
              <text
                style={{
                  paddingBottom: "10px",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                Positive Rating
              </text>
              <text style={{ fontFamily: "Roboto" }}>As of Previous month</text>
            </div>
            <div className="circular_progress_bar_div">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textSize: "1.7rem",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                  textColor: "black",
                  trailColor: "white",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        </div>
        <div className="second_order_details_main">
          <div className="Top_div_Active_orders_main">
            <div className="Active_orders_div">Active Orders</div>
            <div className="chat_n_all_orders_btns_main">
              <div className="chat_btn_main">
                <img src={PlusIcon} alt="icon" className="plus_icon_css" />
                Create Group Chat
              </div>
              <div className="All_orders_btn_main">
                <Input type="select" className="all_orders_select_input_field">
                  <option>All orders</option>
                </Input>
              </div>
            </div>
          </div>
          <div>
            {
              orderCardData.map((item) => {
                return (
                  <div>
                  <OrderCard 
                  OrderImage={item.OrderImage}
                  ProfileImage={item.ProfileImage}
                  ProfilerName={item.ProfilerName}
                  ProfilerCountry={item.ProfilerCountry}
                  OrderBudget={item.OrderBudget}
                  OrderDetails={item.OrderDetails}
                  OrderStatus={item.OrderStatus}
                  DeliveryTime={item.DeliveryTime}
                  />
                  </div>
                )
              })
            }
          </div>
          {/* {
            orderCardData.map((item) => {
              return (
                <div className="order_card_main">
            <div className="order_image_div_mainn">
              <img
                src={item.OrderImage}
                alt="image"
                className="order_image_css"
              />
            </div>
            <div className="second_order_card_div_main">
              <div className="profile_mainnn">
                <div className="order_profile_image_div">
                  <img
                    src={item.ProfileImage}
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
                    {item.ProfilerName}
                  </text>
                  <text
                    style={{
                      lineHeight: "10px",
                      color: "white",
                      fontSize: "small",
                      paddingBottom: "4px",
                    }}
                  >
                    {item.ProfilerCountry}
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
                  {item.OrderBudget}
                </text>
                <text style={{ color: "white", lineHeight: "20px" }}>
                  {item.OrderDetails}
                </text>
              </div>
            </div>
            <div className="third_order_card_div_main">
                <div className="status_n_incomplete_main">
                  <div className="status_div_">
                    Status
                  </div>
                  <div className="InComplete_div_">
                    InComplete
                  </div>
                </div>
                <div className="Delivery_n_time_divs">
                  <div className="delivery_divv_">
                    Dlivery
                  </div>
                  <div className="clock_icon_n_time">
                    <img src={ClockIcon} alt='icon' className="clock_icon_css" />
                    <time dateTime="" className="remaining_days_time">{item.DeliveryTime}</time>
                  </div>
                </div>
            </div>
          </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsMain;
