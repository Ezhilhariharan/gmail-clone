import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    
    return (
        <div className="header">

           <div className="header-left">
           <IconButton>
               <MenuIcon/>
           </IconButton>
           <img src="data:image/jpeg;base64,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" alt="" />
           </div>
           <div className="header-middle">
           <SearchIcon/>
           <input placeholder='search email' type='text'/>
           <ArrowDropDownIcon className="header-arrow"/>
           </div>
            <div className="header-right">
              <IconButton>
                  <AppsIcon/>
              </IconButton>
              <IconButton>
                  <NotificationsIcon/>
              </IconButton>
              <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8IvnNlWEBckepY5mvE-TRWREkju7ZzN_IdzQbAgQ=s32-c-mo"
                alt=""  />
        </div>

        </div>
    )
}

export default Header;
