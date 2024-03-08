import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-around items-center h-20 gap-32">
      <Link href={'/'}>
        <img src="assets\shared\desktop\logo.svg" alt="" />
      </Link>
      <img
        src="assets\shared\mobile\menu.svg"
        alt=""
        className="h-[17px] w-[28px] cursor-pointer"
      />
    </div>
  );
}
