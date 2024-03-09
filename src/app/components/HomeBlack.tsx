import Button from './Button';

export default function HomeBlack() {
  return (
    <div className="w-full flex items-center justify-around gap-10 flex-col bg-[#1B262F] text-center py-24 px-1">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex gap-10 flex-col">
          <img src="assets\shared\desktop\tesla.svg" alt="" />
          <img src="assets\shared\desktop\hewlett-packard.svg" alt="" />
          <img src="assets\shared\desktop\google.svg" alt="" />
        </div>
        <div className="flex gap-10 flex-col">
          <img src="assets\shared\desktop\microsoft.svg" alt="" />
          <img src="assets\shared\desktop\oracle.svg" alt="" />
          <img src="assets\shared\desktop\nvidia.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="leading-9 text-4xl text-[#FBFCFE]">Who we work with</h2>
        <p className="opacity-75 text-[#FBFCFE] text-base text-center">
          Today, millions of people around the world have successfully connected their
          accounts to apps they love using our API. We provide developers with the tools
          they need to create easy and accessible experiences for their users.
        </p>
      </div>
      <div className="mt-2">
        <Button text="About Us" />
      </div>
    </div>
  );
}
