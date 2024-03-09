import Button from './Button';

type proptype = {
  header: string;
  price: number;
  count: number;
};

export default function Plans({ header, price, count }: proptype) {
  return (
    <div className="flex items-center justify-center flex-col mt-12 w-[90%] gap-6">
      <h2 className="text-2xl text-[#BA4270] leading-8">{header}</h2>

      <p className="mt-16 text-5xl leading-18 text-[#36536B]">${price}.00</p>
      {count === 1 && (
        <div
          className="flex flex-col items-start justify-center gap-2 text-[#36536B]
          "
        >
          <div className="flex gap-4 items-center justify-center">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p className="">Transactions</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p className="">Auth</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p className="">Identity</p>
          </div>
          <p className="ml-7 opacity-45">Investments</p>
          <p className="ml-7 opacity-45">Assets</p>
          <p className="ml-7 opacity-45">Liabilities</p>
          <p className="ml-7 opacity-45">Income</p>
        </div>
      )}
      {count === 2 && (
        <div className="flex flex-col items-start justify-center gap-2 text-[#36536B]">
          <div className="flex gap-4">
            <div className=" flex items-center justify-start flex-col gap-6 mt-2">
              <img
                src="assets\shared\desktop\icon-check.svg"
                alt=""
                className="flex-shrink-0 w-3 h-2"
              />
              <img
                src="assets\shared\desktop\icon-check.svg"
                alt=""
                className="flex-shrink-0 w-3 h-2"
              />
              <img
                src="assets\shared\desktop\icon-check.svg"
                alt=""
                className="flex-shrink-0 w-3 h-2"
              />
              <img
                src="assets\shared\desktop\icon-check.svg"
                alt=""
                className="flex-shrink-0 w-3 h-2"
              />
            </div>
            <div className="flex items-start justify-start flex-col gap-2">
              <p>Transactions</p>
              <p>Auth</p>
              <p>Identity</p>
              <p>Investments</p>
              <p>Assets</p>
            </div>
          </div>

          <p className="opacity-45 ml-7">Liabilities</p>
          <p className="opacity-45 ml-7">Income</p>
        </div>
      )}
      {count === 3 && (
        <div className="flex flex-col items-start justify-center gap-2 text-[#36536B]">
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Transactions</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Auth</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Identity</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Investments</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Assets</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Liabilities</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="assets\shared\desktop\icon-check.svg"
              alt=""
              className="flex-shrink-0 w-3 h-2"
            />
            <p>Income</p>
          </div>
        </div>
      )}
      <div className="h-[1px] w-full bg-[#36536B] opacity-25 my-8"></div>

      <div className="font-bold border-[1px] border-[#36536B] rounded-[28px] px-5 py-3 text-center text-[#36536B]">
        Request Access
      </div>
    </div>
  );
}
