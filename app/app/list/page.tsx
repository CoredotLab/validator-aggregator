"use client";

import { useNavigation } from "@/hooks/useNavigation";
import Image from "next/image";

export default function ValidatorListHome() {
  const { goToProfile } = useNavigation();
  const handleBlockdaemonBtn = () => {
    console.log("blockdaemon");
  };
  const handleChartBtn = () => {
    goToProfile();
  };

  return (
    <main className="flex flex-col">
      {/* trending & wallet */}
      <div className="flex mx-auto md:mt-[66px] mt-[33px] xl:space-x-[42px] w-full justify-center">
        {/* trending */}
        <div className="xl:flex hidden w-[530px] h-[289px] bg-gradient-to-b from-blue-900 to-40% to-zinc-900 rounded-[15px] border border-slate-500 flex-col">
          <div className="text-blue-100 text-xl font-bold font-['SUIT'] leading-tight my-[20px] ml-[22px]">
            Trending
          </div>
          <div className="w-full h-[1px] bg-slate-500" />
          <button className="w-full h-[45px]" onClick={handleBlockdaemonBtn}>
            <div className="w-full flex justify-between items-center h-full">
              <div className="flex items-center justify-center ml-[22px]">
                <div className="text-white text-xl font-semibold font-['SUIT'] leading-tight">
                  1.
                </div>
                <div className="text-white text-xl font-medium font-['SUIT'] leading-none ml-[22px]">
                  Blockdaemon
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={25}
                  height={25}
                  alt="network_button"
                />
                <div className="text-white text-base font-medium font-['SUIT'] leading-none flex items-center mx-[22px]">
                  5.3%
                </div>
              </div>
            </div>
          </button>
          <div className="w-full h-[1px] bg-slate-500" />
        </div>
        {/* wallet */}
        <div className="relative flex xl:w-[530px] w-[80%] md:h-[289px] h-[144px] bg-gradient-to-b from-blue-900 to-40% to-zinc-900 rounded-[15px] border border-slate-500 justify-center items-center">
          <div className="absolute top-0 w-full flex justify-between">
            <div className="md:ml-[24px] ml-[12px] md:mt-[24px] mt-[12px]">
              {/* <div className="text-blue-100 text-[21px] font-medium font-['SUIT']">
                jewelkim.eth
              </div> */}
              <div className="text-blue-100 md:text-[21px] text-[12px] font-medium font-['SUIT']">
                0xB4fa...4092
              </div>
            </div>
            <button className="mr-[15px]" onClick={handleChartBtn}>
              <Image
                src="/images/icons/icon_chart.png"
                width={32}
                height={32}
                alt="portfolio_button"
                className="md:block hidden"
              />
              <Image
                src="/images/icons/icon_chart.png"
                width={20}
                height={20}
                alt="portfolio_button"
                className="md:hidden block mt-[10px]"
              />
            </button>
            {/* <button className="w-1.5 h-8 relative mt-[24px] mr-[24px]">
              <div className="w-1.5 h-1.5 left-0 top-0 absolute bg-blue-100 rounded-full"></div>
              <div className="w-1.5 h-1.5 left-0 top-[13px] absolute bg-blue-100 rounded-full"></div>
              <div className="w-1.5 h-1.5 left-0 top-[26px] absolute bg-blue-100 rounded-full"></div>
            </button> */}
          </div>
          <div className="flex flex-col items-end">
            <div className="flex justify-between items-end w-full">
              <div className="text-center text-white md:text-4xl text-lg font-semibold font-['SUIT']">
                0.0045
              </div>
              <div className="text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] ml-[21px]">
                ETH
              </div>
            </div>
            <div className="flex justify-between items-end w-full md:mt-[23px]">
              <div className="text-center text-white md:text-4xl text-lg font-semibold font-['SUIT']">
                $ 0.0045
              </div>
              <div className="text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] ml-[21px]">
                USD
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all validators */}
      <div className="md:mt-[80px] mt-[40px] w-full flex flex-col items-center">
        <div className="text-white md:text-4xl text-lg font-semibold font-['SUIT'] leading-9 xl:w-[1102px] w-[80%] flex md:justify-start justify-center">
          All validators
        </div>
        <div className="md:mt-[20px] mt-[10px] flex xl:w-[1102px] w-[80%] md:h-[500px] h-[250px] bg-gradient-to-b from-blue-900 to-20% to-zinc-900 rounded-[15px] border border-slate-500 flex-col">
          {/* subjects */}
          <div className="flex justify-between items-center md:h-[100px] h-[50px]">
            <div className="text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:ml-[42px] ml-[21px]">
              validators
            </div>
            <div className="flex md:space-x-[56px] space-x-[10px] md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                Network
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                APY
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                Detail
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-500" />
          {/* list */}
          <button
            className="flex justify-between items-center md:h-[100px] h-[50px]"
            onClick={handleBlockdaemonBtn}
          >
            <div className="text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight md:ml-[42px] ml-[21px]">
              Blockdaemon
            </div>
            <div className="flex md:space-x-[56px] space-x-[10px] md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:mr-[20px] mr-[10px] flex items-center justify-center">
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={25}
                  height={25}
                  alt="network_button"
                />
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight flex items-center justify-center">
                5.3%
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight flex items-center justify-center">
                <Image
                  src="/images/icons/icon_detail.png"
                  width={50}
                  height={25}
                  alt="detail_button"
                  className="md:block hidden"
                />
                <Image
                  src="/images/icons/icon_detail.png"
                  width={25}
                  height={12}
                  alt="detail_button"
                  className="md:hidden block"
                />
              </div>
            </div>
          </button>
          <div className="w-full h-[1px] bg-slate-500" />
        </div>
        {/* index */}
        <Image
          src="/images/index.png"
          width={228}
          height={28}
          alt="index_button"
          className="mt-[20px]"
        />
      </div>
    </main>
  );
}
