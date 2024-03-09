import Formsbmt from '@/app/components/Formsbmt';
import Join from '@/app/components/Join';

export default function Contact() {
  return (
    <div className="flex items-center justify-center flex-col py-10 gap-20">
      <img
        src="assets\shared\desktop\bg-pattern-circle.svg"
        alt=""
        className="absolute top-[-30%] right-[-50%]"
      />
      <h2 className="text-3xl text-[#36536B] leading-9 text-center w-[90%]">
        Submit a help request and we’ll get in touch shortly.
      </h2>
      <Formsbmt />
      <div className="flex items-center justify-center flex-col  gap-8 w-[90%]">
        <h2 className="text-2xl text-[#36536B] opacity-80 leading-8 text-center">
          Join the thousands of innovators already building with us
        </h2>
        <Join />
      </div>
    </div>
  );
}
