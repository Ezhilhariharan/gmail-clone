import React from 'react'
import './Emailrow.css';
import { IconButton } from '@material-ui/core';
import  Checkbox from '@material-ui/core/Checkbox';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {selectMail} from './features/mailSlice.js';


function Emailrow({id,title,time,subject,description}) {
    const history = useHistory();
     const dispatch = useDispatch();

    const  openMail = () => {
       dispatch(
           selectMail({
            id,
            title,
            time,
            subject,
            description,
           })
           );
           history.push("/mail")
    };

    return (
        <div onClick={openMail} className="Emailrow">
             <div className="Emailrow-option">
                 <Checkbox/>
             <IconButton>
                 <StarBorderOutlinedIcon/>
              </IconButton>
              <IconButton>
                 <LabelImportantOutlinedIcon/>
              </IconButton>
            </div>
            <h3 className="Emailrow-title">
            {title}
            </h3>
            <div className="Emailrow-message">
            <h4>{subject}{"  "}<span className="Emailrow-description">- {description}</span></h4>
            </div>
            <p className="Emailrow-time">
            {time}
            </p>
        </div>
    )
}

export default Emailrow
