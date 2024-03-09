import React from 'react';

export default function Aboutnum() {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center relative">
      <div className="h-[1px] w-full bg-[#36536B] opacity-25 my-5"></div>
      <div className="w-full flex  items-center justify-center flex-col gap-3">
        <div className="flex flex-col items-center justify-center w-full gap-4 ">
          <p className=" opacity-65 text-lg text-[#36536B] leading-7 text-center">
            Team Members
          </p>
          <h2 className="text-[#BA4270] text-5xl leading-18">300+</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className=" opacity-65 text-lg text-[#36536B] leading-7 text-center">
            Offices in the US
          </p>
          <h2 className="text-[#BA4270] text-5xl leading-18">3</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className=" opacity-65 text-lg text-[#36536B] leading-7 text-center">
            Transactions analyzed
          </p>
          <h2 className="text-[#BA4270] text-5xl leading-18">10M+</h2>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#36536B] opacity-25 my-5"></div>
    </div>
  );
}
