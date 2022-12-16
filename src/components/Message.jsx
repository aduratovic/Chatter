import React from 'react';
import {auth} from '../firebase'

const style = {
  message: ` flex items-center shadow-xl m-4 py-2 px-3 rounded`,
  name: ` absolute mt-[-4rem] text-stone-600 text-xs font-medium`,
  sent: `relative bg-teal-700 text-white flex-row-reverse text-end float-right rounded`,
  received: `relative bg-teal-400 text-white float-left rounded `,
};

const Message = ({ message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;