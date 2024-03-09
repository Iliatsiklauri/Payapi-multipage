type Proptype = { src: string; header: string; p: string };
function Comp({ header, p, src }: Proptype) {
  return (
    <div className="flex items-center justify-center flex-col w-[90%] text-center">
      {' '}
      <img src={`${src}`} alt="" />{' '}
      <p className="font-bold text-lg text-[#36536B] mt-8">{header}</p>{' '}
      <p className="text-[#6C8294] mt-4">{p}</p>{' '}
    </div>
  );
}
export default function Imgtext() {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      {' '}
      <Comp
        header="Personal Finances"
        p="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
        src="assets\home\desktop\icon-personal-finances.svg"
      />{' '}
      <Comp
        src="assets\home\desktop\icon-banking-and-coverage.svg"
        header="Banking & Coverage"
        p="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
      />{' '}
      <Comp
        src="assets\home\desktop\icon-consumer-payments.svg"
        header="Consumer Payments"
        p="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
      />{' '}
    </div>
  );
}
