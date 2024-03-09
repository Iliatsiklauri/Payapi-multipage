import Plans from '@/app/components/Plans';

export default function Pricing() {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src="assets\shared\desktop\bg-pattern-circle.svg"
        alt=""
        className=" absolute top-[-8%] right-[-47%]"
      />
      <h2 className="text-3xl leading-9 text-[#36536B]">pricing</h2>
      <div className="flex items-center justify-center flex-col w-full mb-16 md:mb-0">
        <Plans count={1} header="Free Plan" price={0.0} />
        <Plans count={2} header="Basic Plan" price={249} />
        <Plans count={3} header="Premium Plan" price={499} />
      </div>
    </div>
  );
}
