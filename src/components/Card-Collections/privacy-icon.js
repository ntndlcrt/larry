import React from "react";
import { IoPeopleOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';
import { BiWorld } from 'react-icons/bi';

function PrivacyIcon({ privacyStatus }) {

  switch(privacyStatus) {
    case "private":
        return <SlLock />;
    case "public":
        return <IoPeopleOutline />;
    default:
        return <BiWorld />;
  }
}

export default PrivacyIcon;
