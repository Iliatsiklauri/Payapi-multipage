import React from 'react';

export default function Textp({ heading, paragr }: { heading: string; paragr: string }) {
  return (
    <div className="flex items-center justify-center gap-4 flex-col text-center">
      <h2 className="text-[#36536B] text-3xl text-center">{heading}</h2>
      <p className="leading-7 text-[#6C8294] text-center">{paragr}</p>
    </div>
  );
}
