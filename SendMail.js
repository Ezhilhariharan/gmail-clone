import React from 'react'
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import {closeSendMsg} from './features/mailSlice.js';
import {useDispatch} from 'react-redux';
import firebase from 'firebase';
import { db } from './firebase.js';

function SendMail() {
    
    const {register,handleSubmit,watch ,formState: { errors }} = useForm();

    const dispatch = useDispatch();

    const  onSubmit = (formData) => {

         console.log(formData);
         db.collection("emails").add({
             to: formData.to,
             subject: formData.subject,
             message: formData.message,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         });

         dispatch(closeSendMsg());
    };

    return (
        <div className="SendMail">

            <div className="SendMail-header">
            <h3>New Message</h3>
            <CloseIcon className="SendMail-close"
            onClick={() => dispatch(closeSendMsg())}/>
            </div> 

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="to" placeholder="To" type="email"
                 {...register("to", {required: true})}/>
                 {errors.to && <p className="SendMail-error"> To is Required</p>}

                <input name="subject"  placeholder="Subject" type="text" 
                {...register("subject", {required: true})}/>
                {errors.subject && <p className="SendMail-error"> subject is Required</p>}

                <input name="message"  placeholder="Message..." 
                    className="SendMsg"
                {...register("message", {required: true})}
                type="text"/>
                {errors.message && <p className="SendMail-error"> message is Required</p>}

           <div className="SendMail-option">
                    <Button className="SendMail-send" 
                    variant="contained"
                    color="primary"
                    type="submit">send</Button>
           </div>

                </form>
        </div>
    );
};

export default SendMail;
