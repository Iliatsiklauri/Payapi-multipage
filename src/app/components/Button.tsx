export default function Button({ text }: { text: string }) {
  return (
    <div className="border-[1px] border-[#FBFCFE] py-2 px-6 bg-transparent rounded-[24px]  text-center cursor-pointer">
      <p className="text-bold text-[#FBFCFE]">{text}</p>
    </div>
  );
}
