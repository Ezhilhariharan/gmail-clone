import React ,{useEffect,useState} from 'react'
import './EmailList.css';
import Sections from './Sections.js';
import Emailrow from './Emailrow.js';
import {  Checkbox , IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { db } from './firebase.js';


function EmailList() {

  const [emails,setEmails] = useState([]);

  useEffect(()=>{
    db.collection("emails")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot) => 
     setEmails(
      snapshot.docs.map((doc)=> ({
         id: doc.id,
         data: doc.data(),
       }))
      )
     );
  },[]);

    return (
        <div className="EmailList">
            <div className="EmailList-setting">
                <div className="EmailList-settingleft">
                    <Checkbox/>

                <IconButton>
                <ArrowDropDownIcon/>
                </IconButton>
              <IconButton>
                <RedoIcon/>
              </IconButton>
              <IconButton>
                <MoreVertIcon/>
              </IconButton>

                </div>
                <div className="EmailList-settingright">

                <IconButton>
                <ChevronLeftIcon/>
                </IconButton>
              <IconButton>
                <ChevronRightIcon/>
              </IconButton>
              <IconButton>
                <KeyboardHideIcon/>
              </IconButton>
              <IconButton>
                <SettingsIcon/>
              </IconButton>

                </div>
            </div>
            <div className="EmailList-section">
                      <Sections Icon={InboxIcon} title="Primary" color="#c04b37" selected/>
                      <Sections Icon={PeopleIcon} title="Social" color="#1A73E8" /> 
                      <Sections Icon={LocalOfferIcon} title="Promotions" color="green" />
                </div>
                <div className="EmailList-list">
                  {emails.map(({id, data:{ to,subject,message,timestamp}}) => (
                    <Emailrow 
                    id={id}
                    key={id}
                    title={to}
                    time={new Date(timestamp?.seconds*1000).toUTCString()}
                    subject={subject}
                    description={message}
                    />
                  ))}
                   <Emailrow 
                   title='twitch'
                   time="10pm"
                   subject='test'
                   description='wthanunua'
                   />
                  </div>  
        </div>
    )
}

export default EmailList
