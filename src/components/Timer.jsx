import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ delayResend = "30" }) => {
  const [delay, setDelay] = useState(+delayResend);
  const navigate = useNavigate();
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
      navigate("/testpage/hr");
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
    <Typography align="center">
      <span style={{display:'block'}}>
        {minutes}:{seconds}
      </span>
    </Typography>
    </>
  );
};

export default Timer;