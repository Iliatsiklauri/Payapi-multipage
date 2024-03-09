export default function Phones() {
  return (
    <div className="flex items-center justify-center flex-col mt-12 md:mt-0 gap-5">
      <div className="flex items-center justify-center flex-col">
        <img src="assets\home\desktop\illustration-easy-to-implement.svg" alt="" />
        <div className="text-center flex items-center justify-center flex-col gap-6">
          <h2 className="#36536B text-4xl">Easy to implement</h2>
          <p className="text-[#6C8294] w-[90%] leading-7">
            Our API comes with just a few lines of code. You’ll be up and running in no
            time. We built our documentation page to integrate payments functionality with
            ease.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <img src="assets\home\desktop\illustration-simple-ui.svg" alt="" />
        <div className="text-center w-[90%] flex items-center justify-center flex-col gap-6">
          <h2 className="text-[#36536B] text-4xl">Simple UI & UX</h2>
          <p className="text-[#6C8294] leading-7">
            Our pre-built form is easy to integrate in your app or website’s checkout flow
            and designed to optimize conversion.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
