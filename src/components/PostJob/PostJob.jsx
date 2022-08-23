import React from "react";
import "../PostJob/PostJob.css";
import BuyerNavbar from "../BuyerNavbar/BuyerNavbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import SubmitCardImage1 from "../../images/submitcardimg1.png";
import { useNavigate } from "react-router-dom";
import CloudImageOne from "../../images/cloud1.png";
import CloudImageTwo from "../../images/submitcardimg3.png";
import DocumentIcon from "../../images/attachfileselectedicon.png";

const PostJob = () => {
  const navigate = useNavigate();

  const TableData = [
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 50',
        Delivery: '2 days',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet',
        attachment: 'App.flow.txt',
        budget: '$ 450',
        Delivery: '1 day',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem  sit',
        attachment: 'App.flow.txt',
        budget: '$ 250',
        Delivery: '24 hour',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 800',
        Delivery: '1 Year',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 490',
        Delivery: '1 Decade',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 750',
        Delivery: '7 days',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 150',
        Delivery: '26 days',
        btnText: 'View Request'
    },
    {
        postedDate: 'Dec 02, 2021',
        jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit',
        attachment: 'App.flow.txt',
        budget: '$ 150',
        Delivery: '26 days',
        btnText: 'View Request'
    },
  ]

  return (
    <div style={{ marginBottom: '4rem' }}>
      <div>
        <BuyerNavbar />
      </div>
      <div>
        <GuestOptions />
      </div>
      <div className="main_postJob">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="main_main_sumbmit_card">
            <div className="main_above_div">
              <text className="main_text_css">
                Hey Alexa Beck! Hire some one?
              </text>
              <img
                src={SubmitCardImage1}
                alt="image"
                className="main_submit_card_image_css"
              />
            </div>
            <div
              className="main_below_div"
              onClick={() => navigate("/submitrequest")}
            >
              Submit Request Now
            </div>
          </div>
          <div className="card_second_main">
            <div className="txt_n_btn_main">
              <div className="text_div">Services You may need to order</div>
              <div className="explore_btn" onClick={() => navigate('/explore')}>Explore</div>
            </div>
            <div className="cloud_images_div">
              <img src={CloudImageOne} className="cloud_images_css" />
              <img src={CloudImageTwo} className="cloud_images_css" />
            </div>
          </div>
        </div>
      </div>
      <div className="table_full_main_div">
        <table
          style={{
            border: "none",
            marginTop: 20,
            width: "94%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderCollapse: 'collapse',
          }}
          responsive
          size="lg"
          striped
        >
          <tbody className="table_css"> 
            <tr style={{ padding: 1, height: 40, width: "100%" }}>
              <td className="td_heading_css" style={{ padding: 5, height: 40, width: "10%" }}>
                Posted On
              </td>
              <td  className="td_heading_css" style={{ padding: 1, height: 40, width: "40%", paddingLeft: '20px' }}>
                Job Details
              </td>
              <td className="td_heading_css" style={{ padding: 5, height: 40, width: "10%" }}>
                Attachments
              </td>
              <td className="td_heading_css" style={{ padding: 5, height: 40, width: "10%" }}>BUDGET</td>
              <td className="td_heading_css" style={{ padding: 5, height: 40, width: "10%" }}>Dlivery</td>
              <td className="td_heading_css" style={{ padding: 5, height: 40, width: "10%", paddingLeft: '35px' }}>Action</td>
            </tr>
            {
                TableData.map((item) => {
                    return (
                        <tr className="table_tr" style={{ padding: 1, height: 40, width: "100%" }}>
                        <td style={{ padding: 15, height: 40, width: "10%" }}>
                          {item.postedDate}
                        </td>
                        <td style={{ padding: 15, height: 40, width: "10%" }}>
                          {item.jobDetails}
                        </td>
                        <td style={{ width: "10" }}>
                          <div className="attachment_td_row">
                            <img
                              src={DocumentIcon}
                              alt="icon"
                              className="document_icon"
                            />
                            <text
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                paddingLeft: "10px",
                              }}
                            >
                              {item.attachment}
                            </text>
                          </div>
                        </td>
                        <td style={{ padding: 15, height: 40, width: "10%" }}>{item.budget}</td>
                        <td style={{ padding: 15, height: 40, width: "10%" }}>{item.Delivery}</td>
                        <td style={{ padding: 15, height: 40, width: "10%" }}>
                          <div className="view_request_div">{item.btnText}</div>
                        </td>
                      </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostJob;
