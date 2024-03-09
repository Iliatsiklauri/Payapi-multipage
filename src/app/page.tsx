import HomeBlack from './components/HomeBlack';
import Imgtext from './components/Imgtext';
import Phones from './components/Phones';
import Schedule from './components/Schedule';

export default function Home() {
  return (
    <main className="py-4 flex items-center justify-center flex-col w-full gap-4">
      <img
        src="assets\shared\desktop\bg-pattern-circle.svg"
        alt=""
        className="z-20 absolute top-[-4%] w-[100%] rounded-full"
      />
      <img
        src="assets\home\desktop\illustration-phone-mockup.svg"
        alt=""
        className="h-[328px] ml-8 z-30"
      />
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h2 className="text-[#36536B] text-3xl font-semibold text-center">
          Start building with our APIs for absolutely free.
        </h2>
        <Schedule />
        <p className="text-base text-[#6C8294]">
          Have any questions?
          <span className="underline font-bold">Contact Us</span>
        </p>
      </div>
      <HomeBlack />
      <Phones />
      <Imgtext />
    </main>
  );
}
