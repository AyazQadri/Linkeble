import React from 'react'
import '../BuyerChatScreen/BuyerChatScreen.css';
import BuyerNavbar from '../BuyerNavbar/BuyerNavbar';
import ChatList from './ChatList';
import ChatConversation from './ChatConversation';


const BuyerChatScreen = () => {
  return (
    <div>
        <div>
            <BuyerNavbar />
        </div>
        <div className='chat_list_n_chat_conversation_main'>
            <div className='chat_screen_chat_list_comp_div_main'>
              <ChatList />
            </div>
            <div className='chat_screen_chat_conversation_comp_div_main'>
              <ChatConversation />
            </div>
        </div>
    </div>
  )
}

export default BuyerChatScreen