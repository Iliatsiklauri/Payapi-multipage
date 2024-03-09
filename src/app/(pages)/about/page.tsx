import Aboutnum from '@/app/components/Aboutnum';
import Textp from '@/app/components/Textp';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <img
        src="assets\shared\desktop\bg-pattern-circle.svg"
        alt=""
        className="absolute top-[-8%] right-[-50%]"
      />
      <div className="w-[90%] flex items-center justify-center text-center gap-20 flex-col">
        <h2 className="text-4xl font-normal leading-9 text-[#36536B]">
          We empower innovators by delivering access to the financial system
        </h2>

        <Textp
          heading="Our Vision"
          paragr=" Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool that
            gives everyone the ability to create amazing products that solve big problems.
            We are deeply focused on democratizing financial services through technology."
        />
        <Textp
          heading="Our Business"
          paragr=" At the core of our platform is the technical infrastructure APIs that connect
            consumers. Our innovative product provides key insights for businesses and
            individuals, as well as robust reporting for traditional financial
            institutions and developers."
        />
      </div>
      <img src="assets\about\mobile\image-team-members.jpg" alt="" className="w-full" />
      <Aboutnum />
      <Textp
        heading="The Culture"
        paragr="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
      />
      <Textp
        heading="The People"
        paragr=" We all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
      />
    </div>
  );
}
