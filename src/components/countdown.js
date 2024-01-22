import React, { useEffect, useState } from "react";

const CountdownTimer = ({ endDate, ...props }) => {
  const [remainingTime, setRemainingTime] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

  const countDownDate = endDate;

  useEffect(() => {
    const x = setInterval(() => {
      // Get today's date and time
      var now = Math.floor(Date.now() / 1000);

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      if (distance >= 0) {
        var d = Math.floor(distance / 86400);
        if (d < 10) {
          d = "0" + d;
        }
        var h = Math.floor((distance % 86400) / 3600);
        if (h < 10) {
          h = "0" + h;
        }
        var m = Math.floor((distance % 3600) / 60);
        if (m < 10) {
          m = "0" + m;
        }
        var s = Math.floor(distance % 60);
        if (s < 10) {
          s = "0" + s;
        }
        setRemainingTime({
          days: d,
          hours: h,
          minutes: m,
          seconds: s,
        });
      } else {
        setRemainingTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(x);
      }
    }, 1000);
  }, [remainingTime]);

  return (
    <div className="Rectangle8   flex items-center justify-center p-3 gap-3 bg-white bg-opacity-30 rounded-2xl">
      {/* <div className="Group7 w-96 h-32 "> */}
      <div className="Rectangle7 flex flex-col items-center p-2 w-28 h-32 left-0 top-[5.19px]  bg-orange-600 rounded-2xl">
        <div className="  h-28 left-[27.36px] top-0  text-white text-7xl font-medium font-['Poppins'] lowercase">
          {remainingTime.days}
        </div>
        <span className="text-white text-lg font-semibold font-['Poppins'] ">
          Days
        </span>
      </div>
      <div className="Rectangle7 flex flex-col items-center p-2 w-28 h-32 left-0 top-[5.19px]  bg-orange-600 rounded-2xl">
        <div className=" h-28 left-[27.36px] top-0  text-white text-7xl font-medium font-['Poppins'] lowercase">
          {remainingTime.hours}
        </div>
        <span className="text-white text-lg font-semibold font-['Poppins'] ">
          Hours
        </span>
      </div>
      <div className="Rectangle7 flex flex-col items-center p-2 w-28 h-32 left-0 top-[5.19px]  bg-orange-600 rounded-2xl">
        <div className=" h-28 left-[27.36px] top-0  text-white text-7xl font-medium font-['Poppins'] lowercase">
          {remainingTime.minutes}
        </div>
        <span className="text-white text-lg font-semibold font-['Poppins']">
          Minutes
        </span>
      </div>
      <div className="Rectangle7 flex flex-col items-center p-2 w-28 h-32 left-0 top-[5.19px]  bg-orange-600 rounded-2xl">
        <div className=" h-28 left-[27.36px] top-0  text-white text-7xl font-medium font-['Poppins'] lowercase">
          {remainingTime.seconds}
        </div>
        <span className="text-white text-lg font-semibold font-['Poppins']">
          Seconds
        </span>
      </div>
      {/* </div> */}
    </div>

    // daisy UI with box
    // <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    //   <div className="flex flex-col p-2 bg-neutral bg-opacity-[0.25] rounded-box text-neutral-content">
    //     <span className="countdown font-mono md:text-4xl text-2xl">
    //       <span style={{ "--value": remainingTime.days }}></span>
    //     </span>
    //     days
    //   </div>
    //   <div className="flex flex-col p-2 bg-neutral bg-opacity-[0.25] rounded-box text-neutral-content">
    //     <span className="countdown font-mono md:text-4xl text-2xl">
    //       <span style={{ "--value": remainingTime.hours }}></span>
    //     </span>
    //     hours
    //   </div>
    //   <div className="flex flex-col p-2 bg-neutral bg-opacity-[0.25] rounded-box text-neutral-content">
    //     <span className="countdown font-mono md:text-4xl text-2xl">
    //       <span style={{ "--value": remainingTime.minutes }}></span>
    //     </span>
    //     min
    //   </div>
    //   <div className="flex flex-col p-2 bg-neutral bg-opacity-[0.25] rounded-box text-neutral-content">
    //     <span className="countdown font-mono md:text-4xl text-2xl">
    //       <span style={{ "--value": remainingTime.seconds }}></span>
    //     </span>
    //     sec
    //   </div>
    // </div>

    // daisy UI no box
    // <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-5xl">
    //       <span style={{ "--value": remainingTime.days }}></span>
    //     </span>
    //     days
    //   </div>
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-5xl">
    //       <span style={{ "--value": remainingTime.hours }}></span>
    //     </span>
    //     hours
    //   </div>
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-5xl">
    //       <span style={{ "--value": remainingTime.minutes }}></span>
    //     </span>
    //     min
    //   </div>
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-5xl">
    //       <span style={{ "--value": remainingTime.seconds }}></span>
    //     </span>
    //     sec
    //   </div>
    // </div>
  );
};

export default CountdownTimer;
