import React from 'react';
import "../BuyerChatScreen/BuyerChatScreen.css";
import Picture from "../../images/profilepic.png";



const ChatConversation = () => {
  return (
    <div className='chat_conversation_main_div'>
      <div className='chat_box_header_main'>
        <div className='receiver_profile_pic_main_div'>
          <img src={Picture} alt='img' className='receiver_profile_pic_css' />
        </div>
        <div className='receiver_name_with_designation_main'>
          <div className='receiver_name_text_css'>
            Sunny
          </div>
          <div className='receiver_designation_text_css'>
            Professional Mobile App Developer
          </div>
        </div>
      </div>
      <div className='chat_box_with_profile_details_main'>
        <div className='message_screen_main'>
            ss
        </div>
        <div className='profiler_details_at_left_chat_screen'>
          Sunny
        </div>
      </div>
    </div>
  )
}

export default ChatConversation