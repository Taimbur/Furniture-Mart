import React, { useState, useEffect } from "react";
import "../UI/Banner.css";
import banner from "../assets/img/counter-timer-img.png";
const Banner = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countdown = () => {
    const destination = new Date("27 May 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrent = destination - now;
      const days = Math.floor(diffrent / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffrent % (1000 * 60)) / 1000);
      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countdown();
  });

  return (
    <>
      <div className="container text-center banner-sec">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col-3">
            <div className="p-3">
              <h4 className="l">Limited Offer</h4> <em>Hurry Now</em>
              <div className="time ">
                <h4>Day{days}</h4> <h4> Hours{hours} </h4>
                <h4> Minutes{minutes} </h4> <h4> Seconds{seconds} </h4>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3">
              <button className="btn btn-warning">Vist Now</button>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3">
              <img src={banner} alt="banner" className="w-100 h-100 gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
