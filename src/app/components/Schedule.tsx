export default function Schedule() {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        className="email rounded-[24px] w-full h-12 bg-white text-[#36536B] font-bold pl-6"
        placeholder="Enter email address"
      />
      <div className="rounded-[24px] flex items-center justify-center h-12 bg-[#BA4270] w-full cursor-pointer">
        <p className="text-white font-bold text-base">Schedule a Demo</p>
      </div>
    </div>
  );
}
