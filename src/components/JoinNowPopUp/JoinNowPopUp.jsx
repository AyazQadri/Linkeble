import React from 'react'
import { Button, 
    Dialog, 
    DialogActions, 
    DialogTitle, 
    DialogContentText, 
    DialogContent, 
    TextField, 
    CardMedia, 
    Avatar, 
    Box,
    Typography,
    Input,

} from '@material-ui/core'
import JoinNowPopUpImage from '../../images/joinnowimage.png';
import CrossIcon from '../../images/crossicon.png';
import '../JoinNowPopUp/JoinNowPopUp.css';
import { useState } from 'react';
import EmailIcon from '../../images/emailicon.png';
import PasswordIcon from '../../images/passwordlock.png';
import EyeIcon from '../../images/eye.png';
import InvisibleIcon from '../../images/invisible.png';
import FaceBookicon from '../../images/faceboook.png';
import GoogleIcon from '../../images/googleicon.png';


const JoinNowPopUp = ({showPopUp, hidePopUp, handleSignIn}) => {
  
  const [isPasswordShown, setIsPasswordShown] = useState()
  

 const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown)
  };
  
  return (
    <div>
        { showPopUp && 
        <div className='popup_main'>
          <div className='popUp_sub_main'>
          <div className='first_main'>
            <div className='pic_above_css'>
              Search the ultimate freelance
              service providers
            </div>
            <img src={JoinNowPopUpImage} alt='Join Now Image' className='join_now_image' />
          </div>
          <div className='second_main'>
          <div className='cross_icon_main'>
            <img src={CrossIcon} alt='image' className='cross_icon_css' onClick={() => {hidePopUp()}} />
          </div>
          <div className='welcome_heading'>
            Welcome Back!
          </div>
          <div className='welcome_heading_below_text'>
            Sign in to our app to hire exactly what you need.
          </div>
          <div className='main_div_input_field'>
              <div className='email_tag_div'>
                  Email
              </div>
              <div className='_input_field'>
                <img src={EmailIcon} alt='email icon' className='email_Icon_css' />
                <input type='text' placeholder='appuser2021@gmail.com' className='input_css' />
              </div>
              <div className='password_tag_div'>
                  Password
              </div>
              <div className='_input_field'>
                <img src={PasswordIcon} alt='email icon' className='email_Icon_css' />
                <input type={isPasswordShown ? 'text' : 'password'}  className='input_css' />
                <img src={isPasswordShown ? InvisibleIcon : EyeIcon } alt='icon' className='eye_css' onClick={togglePasswordVisiblity} />
              </div>
          </div>
          <div className='main_forgot_password_checkbox'>
            <div className='checkBox_remeber_me_div'>
            <input type='checkbox' className='checkbox_css' />
            <text className='remeber_me_text'>Remember me</text>
            </div>
            <div className='forgot_password_div'>
              Forgot Password?
            </div>
          </div>
          <div className='sign_in_button_main' onClick={() => handleSignIn()}>
              Sign in
          </div>
          <div className='Join_now_main'>
            <text className='dont_have_account_text_css'>
              Don't have account?
            </text>
            <text className='join_now_text_css'>
              Join Now
            </text>
          </div>
          <div className='sign_in_with_main'>
            <div className='left_line'>
            </div>
            <div className='text_between_line'>
              Or Sign in with
            </div>
            <div className='right_line'>
            </div>
          </div>
          <div className='google_facebook_main'>
            <div className='google_div'>
              <img src={GoogleIcon} alt='google_icon' className='google_icon_css'/>
                <text className='google_text'>
                  Google
                </text>
            </div>
            <div className='facebook_div'>
              <img src={FaceBookicon} alt='facebook_icon' className='facebook_icon_css' />
                <text className='facebook_text'>
                  Facebook
                </text>
            </div>
          </div>
          </div>
          </div>
        </div>
      }
    </div>
  )
}

export default JoinNowPopUp