"use client";

import { useNavigation } from "@/hooks/useNavigation";
import Image from "next/image";

export default function Home() {
  const { goToApp } = useNavigation();

  const handleTwitterBtn = () => {
    window.open("https://twitter.com/coredotlab", "_blank");
  };

  const handleGithubBtn = () => {
    window.open("https://github.com/CoredotLab", "_blank");
  };

  const handleMediumBtn = () => {
    window.open("https://medium.com/@coredotlab", "_blank");
  };

  return (
    <main className="flex flex-col items-center">
      <div className="md:mt-[102px] mt-[39px] text-center">
        <span className="text-white md:text-5xl text-3xl font-extrabold font-['SUIT'] md:leading-[57.60px]">
          Compare{" "}
        </span>
        <span className="text-blue-600 md:text-5xl text-3xl font-extrabold font-['SUIT'] md:leading-[57.60px]">
          Validators
          <br />
          Maximize
        </span>
        <span className="text-white md:text-5xl text-3xl font-extrabold font-['SUIT'] md:leading-[57.60px]">
          {" "}
          your gains
        </span>
      </div>
      <div className="text-center text-white md:text-2xl md:mt-[53px] mt-[27px] font-medium font-['SUIT'] md:leading-[28.80px]">
        All mainnets under one roof <br />
        Simply compare yields and start staking
      </div>
      <button
        onClick={goToApp}
        className="md:mt-[69px] mt-[35px] md:w-[203px] w-[103px] md:h-16 h-8 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[41px] md:flex justify-center items-center text-center text-white md:text-xl text-xs font-extrabold font-['SUIT']"
      >
        Launch App
      </button>
      <div className="hidden md:flex space-x-3 mt-[34px]">
        <button onClick={handleTwitterBtn}>
          <Image
            src="/images/icons/icon_twitter.png"
            width={28}
            height={28}
            alt={"twitter"}
          />
        </button>
        <button onClick={handleGithubBtn}>
          <Image
            src="/images/icons/icon_github.png"
            width={28}
            height={28}
            alt={"github"}
          />
        </button>
        <button onClick={handleMediumBtn}>
          <Image
            src="/images/icons/icon_medium.png"
            width={28}
            height={28}
            alt={"medium"}
          />
        </button>
      </div>
      <div className="md:text-start text-center md:mt-[80px] mt-[40px] w-[80%] max-w-[1182px] md:h-[221px] h-[291px] bg-gradient-to-b from-blue-900 to-indigo-950 rounded-[15px] shadow border border-blue-600">
        <div className="flex md:flex-row flex-col justify-center items-center h-full md:space-x-[120px] md:space-y-[0px] space-y-[18px] ">
          <div>
            <div className="text-white md:text-[40px] text-[20px] font-bold font-['SUIT'] leading-[48px]">
              $1.5T+
            </div>
            <div className="text-blue-100 text-opacity-80 md:text-2xl text-lg font-medium font-['SUIT'] leading-[28.80px]">
              Staking Volume
            </div>
          </div>
          <div>
            <div className="text-white md:text-[40px] text-[20px] font-bold font-['SUIT'] leading-[48px]">
              60+
            </div>
            <div className="text-blue-100 text-opacity-80 md:text-2xl text-lg font-medium font-['SUIT'] leading-[28.80px]">
              Service Mainnets
            </div>
          </div>
          <div>
            <div className="text-white md:text-[40px] text-[20px] font-bold font-['SUIT'] leading-[48px]">
              %10
            </div>
            <div className="text-blue-100 text-opacity-80 md:text-2xl text-lg font-medium font-['SUIT'] leading-[28.80px]">
              Average Gains
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:mt-[180px] md:mt-[90px] mt-[45px] xl:flex-row flex-col xl:space-x-[86px] xl:space-y-[0px] space-y-[50px]">
        <div className="flex flex-col items-center justify-start md:w-[508px] w-[250px] md:h-[485px] h-[240px] bg-zinc-900 bg-opacity-70 rounded-[15px] shadow border border-slate-500">
          <div className="flex items-center justify-center space-x-10 md:mt-[44px] mt-[22px]">
            <div className="text-white md:text-[40px] text-[20px] font-extrabold font-['SUIT'] md:leading-[48px] leading-[24px]">
              Step 1
            </div>
            <div className="md:w-[233px] w-[115px] h-0.5 bg-white"></div>
          </div>
          <div className="md:mb-[50px] mb-[25px] md:w-[401px] w-[200px] md:mt-[40px] mt-[20px] text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] md:leading-normal">
            Explore the vast array of staking services curated and compiled on
            our platform. <br />
            <br />
            Browse through various options and select the one that aligns with
            your investment objectives. Our user-friendly interface ensures that
            you have all the necessary information to make an informed decision.
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:w-[508px] w-[250px] md:h-[485px] h-[240px] bg-zinc-900 bg-opacity-70 rounded-[15px] shadow border border-slate-500">
          <div className="flex items-center justify-center space-x-10 md:mt-[44px] mt-[22px]">
            <div className="text-white md:text-[40px] text-[20px] font-extrabold font-['SUIT'] md:leading-[48px] leading-[24px]">
              Step 2
            </div>
            <div className="md:w-[233px] w-[115px] h-0.5 bg-white"></div>
          </div>
          <div className="md:mb-[50px] mb-[25px] md:w-[401px] w-[200px] md:mt-[40px] mt-[20px] text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] md:leading-normal">
            Once you’ve made your choice, proceed to stake your assets with ease
            and confidence. <br />
            <br />
            With Vireo, you have the flexibility to claim your rewards whenever
            you wish. Our platform prioritizes your convenience, ensuring a
            smooth claiming process.
          </div>
        </div>
      </div>
    </main>
  );
}
