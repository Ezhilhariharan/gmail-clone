import React from 'react'
import './SIdeBar.css';
import { Button ,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SideBarOption from './SideBarOption.js';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {openSendMsg} from './features/mailSlice.js';
import {useDispatch} from 'react-redux';



function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
           <Button startIcon={<AddIcon fontsize="large"/>}
            className="sidebar-compose"
            onClick={() => dispatch(openSendMsg())}
            >
               COMPOSE
               </Button> 
               <SideBarOption Icon={InboxIcon} title="Inbox"  number={67} selected={true}/>
               <SideBarOption Icon={StarIcon} title="Starred"  number={52}/>
               <SideBarOption Icon={AccessTimeIcon} title="Snoozed"  number={16}/>
               <SideBarOption Icon={LabelImportantIcon} title="Important"  number={62}/>
               <SideBarOption Icon={NearMeIcon} title="Sent"  number={94}/>
               <SideBarOption Icon={NoteIcon} title="Drafts"  number={36}/>
               <SideBarOption Icon={ExpandMoreIcon} title="More"  number={18}/>

              <div className="sidebar-footer"> 
                 <div className="sidebar-footerIcons"> 
              <IconButton>
                 <PersonIcon/>
              </IconButton>
              <IconButton>
                  <DuoIcon/>
              </IconButton>
              <IconButton>
                   <PhoneIcon/>
              </IconButton>
                 </div>
              </div>
        </div>
    )
}

export default Sidebar;






