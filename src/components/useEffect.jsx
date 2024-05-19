import React, { useEffect, useState } from 'react';

const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>{visible && <h1>Hello</h1>}</div>;
};

export default Notification;
