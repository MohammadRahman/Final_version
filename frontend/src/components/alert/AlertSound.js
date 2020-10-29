import React from "react";

const AlertSound = () => {
  return (
    <audio autoPlay>
      <source src="alert.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default AlertSound;
