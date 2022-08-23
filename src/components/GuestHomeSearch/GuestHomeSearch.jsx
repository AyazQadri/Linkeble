import React from 'react'
import '../GuestHomeSearch/GuestHomeSearch.css';
import freelancer from "../../images/freelancer.png";
import search from "../../images/search.png";


const GuestHomeSearch = () => {

  return (
    <div className="main_guestHome">
      <div className="sub_main_guestHome_one">
        <div className="search_text_div">
          <h2 className="search_text">
            Search the ultimate freelance service providers
          </h2>
        </div>
        <p className="below_Search_tag">
          Hire professional Freelancer World Wide
        </p>
        <div className="guest_search_container">
          <div className="search_icon">
            <img src={search} alt="search icon" className="search_icon_image" />
          </div>
          <div className="search_input">
            <input
              type="search"
              placeholder="Search for any service..."
              className="search_input_text"
            />
          </div>
          <div className="search_button">
            <text>Get Started</text>
          </div>
        </div>
        <div className="main_top_services">
          <div className="top_services">Top Services:</div>
          <div className="top_services_suggestions">Data Sceince</div>
          <div className="top_services_suggestions">Block Chain</div>
          <div className="top_services_suggestions">Al/ML</div>
          <div className="top_services_suggestions">Programming</div>
        </div>
      </div>
      <div className="sub_main_guestHome_two">
        <img src={freelancer} alt="freelancer" className="freelancer_image" />
      </div>
    </div>
  )
}

export default GuestHomeSearch