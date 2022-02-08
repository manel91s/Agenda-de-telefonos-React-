import React from 'react';

const Message = ({children, type}) => {
  
  return (
      <div className={type}>
          <p>{children}</p>
      </div>
  )
};

export default Message;
