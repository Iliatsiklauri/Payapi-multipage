import Link from 'next/link';
import React from 'react';
import Schedule from './Schedule';

export default function Footer() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-20">
      <div className="w-full flex items-center justify-center flex-col gap-8">
        <h2 className="text-4xl text-[#36536B] font-semibold leading-9">
          Ready to start?
        </h2>
        <Schedule />
      </div>
      <footer className="flex flex-col items-center justify-between h-[355px] w-full bg-[#1B262F] p-10 relative overflow-hidden">
        <img src="assets\shared\desktop\logo.svg" alt="" className="w-[135px] h-[38px]" />
        <div className="flex flex-col gap-6 items-center justify-center z-20">
          <Link href={'/pricing'}>
            <p className="font-bold text-base text-[#FBFCFE] opacity-70">Pricing</p>
          </Link>
          <Link href={'/about'}>
            <p className="font-bold text-base text-[#FBFCFE] opacity-70">About</p>
          </Link>
          <Link href={'/contact'}>
            <p className="font-bold text-base text-[#FBFCFE] opacity-70">Contact</p>
          </Link>
        </div>
        <div className="flex gap-6 ">
          <img src="assets\shared\desktop\facebook.svg" alt="" />
          <img src="assets\shared\desktop\twitter.svg" alt="" />
          <img src="assets\shared\desktop\linkedin.svg" alt="" />
        </div>
        <img
          src="assets\shared\desktop\bg-pattern-circle.svg"
          alt=""
          className="absolute w-[100%] bottom-[-60%] z-0"
        />
      </footer>
    </div>
  );
}
