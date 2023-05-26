import React from 'react';

const Notification = ({ showNotification }) => {
  return (
    <div className={`notificationContainer ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
